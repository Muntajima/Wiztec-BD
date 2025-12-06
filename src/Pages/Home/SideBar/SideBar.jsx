import { BiReset } from "react-icons/bi";

const SideBar = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center px-2 border border-2 py-4 rounded-lg">
                <h3 className="font-bold">Property Preference</h3>
                <button className="btn bg-blue-50 flex items-center gap-2 px-1">Reset Filter {" "}<BiReset /></button>
            </div>

            <div className="border border-2 rounded-xl my-2 pl-2 py-4">
                <h2 className="font-bold text-xl">Rent Budget</h2>
                <input type="range" min={0} max="100" value="70" className="range range-sm bg-[#D1B1C5] text-[#6C0443]" />
                <button className="p-2 border border-2 my-2 w-32 ml-40">
                    <p className="font-medium">Maximum</p> $670000</button>
            </div>

            <div className="border border-2 rounded-xl my-2 pl-2 py-4">
                <h2 className="font-bold text-xl pb-4 border-b-2">Suburb</h2>
                <div className="form-control mt-4">
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Eshelby Drive, Cranbrook</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox border-2 text-[#6C0443]" />
                        <span className="label-text text-black">2- 6 Eshelby Dr, Cannonvale</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox border-2 text-[#6C0443]" />
                        <span className="label-text text-black">59/3 Eshelby Drive Cannonvale</span>
                    </label>
                </div>
            </div>

            <div className="border border-2 rounded-xl my-2 pl-2 py-4">
                <h2 className="font-bold text-xl pb-4 border-b-2">Property Type</h2>
                <div className="form-control mt-4 grid col-span-1">
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox border-2 text-[#6C0443]" />
                        <span className="label-text text-black">House</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Land</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Appartment</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Town House</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Villa</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Acreage</span>
                    </label>
                </div>
            </div>

            <div className="border border-2 rounded-xl my-2 pl-2 py-4">
                <h2 className="font-bold text-xl pb-4 border-b-2">Amenties</h2>
                <div className="form-control mt-4 grid col-span-1">
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox checkbox-sm border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Pet Friendly</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox checkbox-sm border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Parking</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox checkbox-sm border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Private Pool</span>
                    </label>
                    <label className="label cursor-pointer mb-4">
                        <input type="checkbox" className="checkbox checkbox-sm border-2 text-[#6C0443]" />
                        <span className="label-text text-black">Private Gym</span>
                        </label>
                    <button className="btn underline text-[#6C0443] font-bold">see more</button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;