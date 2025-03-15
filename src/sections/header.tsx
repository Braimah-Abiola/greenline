import Menu from "@/components/common/menu";
import Wrapper from "@/components/common/wrapper";
import Image from "next/image";

const Header = () => {
  return (
    <nav className=" w-full py-4 border border-b">
      <Wrapper className="flex items-center justify-between">
        <div className=" relative h-[40px] w-[180px]">
          <Image
            fill
            src="/assets/logo-black.svg"
            alt="Beeline Logo"
            className=" object-contain"
          />
        </div>
        <div>
          <Menu />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Header;
