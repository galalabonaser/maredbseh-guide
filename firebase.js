// 1. استدعاء مكتبات الفايربيز الرسمية من روابط جوجل الكاملة والصحيحة
import { initializeApp } from "https://gstatic.com";
import { getDatabase, ref, push, set } from "https://gstatic.com";

// 2. إعدادات التكوين الحقيقية والخاصة بمشروعك maredbseh-guide
const firebaseConfig = {
  apiKey: "AIzaSyAxma_PbEKmwzuMTu4mhT6UfwFVYMJlExo",
  authDomain: "://firebaseapp.com",
  databaseURL: "https://firebaseio.com",
  projectId: "maredbseh-guide",
  storageBucket: "maredbseh-guide.firebasestorage.app",
  messagingSenderId: "647266651782",
  appId: "1:647266651782:web:1a880f31d467194cb00b07",
  measurementId: "G-9Y8XS1J3YV"
};
// 3. تفعيل السيرفر وقاعدة البيانات بشكل رسمي
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 4. دالة استقبال شكاوى أهل معردبسة وسراقب وحفظها سرياً في السيرفر
window.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-complaint-btn');
    const complaintInput = document.getElementById('complaint-text');

    if (submitBtn && complaintInput) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const text = complaintInput.value.trim();

            if (text === "") {
                alert("الرجاء كتابة الشكوى أولاً قبل الضغط على إرسال!");
                return;
            }

            const complaintsRef = ref(database, 'complaints');
            const newComplaintRef = push(complaintsRef);

            set(newComplaintRef, {
                content: text,
                timestamp: Date.now()
            })
            .then(() => {
                alert("Done! Your complaint has been sent secretly to the server. 🔒");
                complaintInput.value = ""; 
            })
            .catch((error) => {
                console.error("Firebase Error: ", error);
                alert("Error! Failed to send. Please check your internet connection.");
            });
        });
    }
});

console.log("Firebase initialized successfully for maredbseh-guide! 🚀");
