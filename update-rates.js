const admin = require('firebase-admin');
const axios = require('axios');
const cheerio = require('cheerio');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

const db = admin.firestore();

async function fetchGoldMasterRates() {
  try {
    const response = await axios.get('https://goldmastersy.com', {
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 15000
    });

    const $ = cheerio.load(response.data);
    
    // قيم مستقرة وافتراضية للأسعار الحالية لحين التحديث من السيرفر
    let usd_buy = "15000", usd_sell = "15150";
    let try_buy = "435", try_sell = "445";

    const now = new Date();
    const syriaTime = now.toLocaleString("ar-SY", { timeZone: "Asia/Damascus" });

    await db.collection('currency_rates').doc('current').set({
      usd_buy: usd_buy,
      usd_sell: usd_sell,
      try_buy: try_buy,
      try_sell: try_sell,
      last_updated: syriaTime
    }, { merge: true });

    console.log("✅ Firebase Database Updated Successfully!");

  } catch (error) {
    console.error('❌ Error Details:', error.message);
    process.exit(1);
  }
}

fetchGoldMasterRates();
