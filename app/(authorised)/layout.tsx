import { HamburgerMenu } from "../components/HamburgerMenu/HamburgerMenu";
import MainPlayer from "../components/MainPlayer/MainPlayer";
import { RightSideBar } from "../components/RightSideBar/RightSideBar";
import { SideBar } from "../components/SideBar/SideBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={"main-components-container"}>
        <SideBar />
        <HamburgerMenu />
        <div className="children-container">
          {children}
        </div>
        <RightSideBar />
      </div>
      <MainPlayer />
    </>
  );
}
