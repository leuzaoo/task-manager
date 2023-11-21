"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";
import menu from "@/app/utils/menu";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const { theme } = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile__overlay">
          <div className="image">
            <Image
              width={80}
              height={80}
              src="/user-img.jpeg"
              alt="User Image"
            />
          </div>
          <p>Leonardo Costa</p>
        </div>
      </div>
      <ul className="nav__items">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              className={`nav-item ${pathname === link ? "active" : ""}`}
              onClick={() => {
                handleClick(item.link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 1px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colorGrey3};

  .profile {
    margin: 1rem;
    padding: 1rem 0.8rem;
    position: relative;
    border-radius: 1rem;
    background-color: #333;
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.colorGrey0};
    display: flex;
    flex-direction: column;
    align-items: center;

    .image img {
      margin: 0 auto;
      border-radius: 100%;
    }
  }
`;
