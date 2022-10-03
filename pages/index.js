
import AdminLayout from "../layout/adminLayout";


export default function Home() {



    return (
        <AdminLayout>
            <div className="flex justify-center items-center h-[400px] ">
                <div className="shadow w-[70%] p-10">
                    <h3 className="text-[24px] mb-4 font-bold text-center border-b-2 border-black pb-4">Welcome To Taxstick</h3>
                    <p className="text-[18px] text-justify">It is a web application that will give you a completely online-based tax management system. Here, the admin, accountant, and user can work in 3 ways. The complete application is dynamic, so any company can use the application as it wishes. Here is the complete system working procedure in a simple and general way.</p>
                </div>
            </div>
        </AdminLayout>
    );
}
