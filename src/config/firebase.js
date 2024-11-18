
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc} from "firebase/firestore";
import  { toast } from "react-toastify"

const firebaseConfig = {
  apiKey: "AIzaSyD0Uuf-ChTyFjNEvJGlWcdSyaEbbjx_mV4",
  authDomain: "chat-app-gs-ed970.firebaseapp.com",
  projectId: "chat-app-gs-ed970",
  storageBucket: "chat-app-gs-ed970.firebasestorage.app",
  messagingSenderId: "367057105853",
  appId: "1:367057105853:web:bee6f65dd46e7983e358d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowercase(),
            email,
            name:"",
            avatar:"", 
            bio:"Hey,There i am using  chat app",
            lastseen:Date.now()
        }
    )
    await setDoc(doc(db,"chats",user.uid),(
        chatData:[]
    ))
    } catch (error) {
        console.error(error)
        toast.error(error.code)   
    }
}
export {signup}