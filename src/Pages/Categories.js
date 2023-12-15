import LoginHeader from "../Components/LoginHeader";
import { motion } from "framer-motion"
import CategoriesList from "../Components/CategoriesList";
export default function Categories(){

    return(
        <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}

        className="bg-zinc-100">
            <LoginHeader></LoginHeader>
            <CategoriesList></CategoriesList>
            
        </motion.div>
    )
}