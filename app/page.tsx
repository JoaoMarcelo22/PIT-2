
export default function Home() {
  return (
    <div className="items-center justify-items-center">
      <img src="pg_01.png" alt="arroz" className="h-[900px] mt-2 rounded-3xl z-1" />
      <p className="text-[60px] font-bold absolute top-1 left-[815px] z-02">Café Mania</p>
      <div className="flex justify-evenly absolute bottom-[50px] right-[710px] w-[550px]">
        <div>
        <a href="#">
        <img src="facebook.png" alt="Facebook" className="h-[50px] mx-[5px] z-02" />
        </a>
        </div>
        <div>
        <a href="#">
        <img src="x.png" alt="Twitter" className="h-[50px] mx-[0px] z-02" />
        </a>
        </div>
        <div>
        <a href="#">
        <img src="google.png" alt="google" className="h-[50px] mx-[5px] z-02 " />
        </a>
        </div>
      </div>
    </div>
  );
}
