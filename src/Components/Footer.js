

const Footer = ()=>{
    return <div className="w-screen flex flex-col justify-center items-center h-32 bg-gradient-to-br from-teal-200 via-pink-200 to-cyan-200">
        <div>
            <h3 className="font-semibold text-lg italic">©️ 2024 Your Company. All rights reserved</h3>
        </div>
        <div className="mt-4 flex gap-7">
            <div>
            <h3 className="font-medium text-base italic hover:cursor-pointer hover:text-slate-500">Privacy policy</h3>
            </div>
            <div>
            <h3 className="font-medium text-base italic hover:cursor-pointer hover:text-slate-500">Terms of services</h3>
            </div>
            <div>
            <h3 className="font-medium text-base italic hover:cursor-pointer hover:text-slate-500">contact us</h3>
            </div>
        </div>
        
    </div>
}
export default Footer;