"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/app/utils/Icons";
import { UserButton, useClerk, useUser } from "@clerk/nextjs";
import styled from "styled-components";
import menu from "@/app/utils/menu";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const { signOut } = useClerk();
  const { user } = useUser();
  const { theme } = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();

  const { firstName, lastName, imageUrl } = user || {
    firstName: "",
    lastName: "",
    imageUrl: "",
  };

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile__overlay">
          <div className="image">
            <Image width={100} height={100} src={imageUrl} alt="User Image" />
          </div>
          <div className="user__btn absolute z-20 left-0 top-0 w-full h-full">
            <UserButton />
          </div>
          <p className="capitalize">
            {firstName} {lastName}
          </p>
        </div>
      </div>
      <ul className="nav__items">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav__item ${pathname === link ? "active" : ""}`}
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
      <button
        className="logout__btn"
        onClick={() => signOut(() => router.push("/signin"))}
      >
        Sair {logout}
      </button>
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

  .user__btn {
    .cl-rootBox {
      width: 100%;
      height: 100%;

      .cl-userButtonBox {
        width: 100%;
        height: 100%;

        .cl-userButtonTrigger {
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
  }

  .profile {
    margin: 1rem;
    padding: 1rem 0.8rem;
    position: relative;
    border-radius: 1rem;
    background-color: #131313;
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.colorGrey0};
    display: flex;
    flex-direction: column;
    align-items: center;

    .profile__overlay {
      display: flex;
      flex-direction: column;
      gap: 8px;

      p {
        font-weight: 300;
      }

      .image {
        flex-shrink: 0;
        display: inline-block;
        overflow: hidden;
      }

      img {
        margin: 0 auto;
        border-radius: 12px;
        transition: all 0.5s ease;
      }
    }
  }

  .nav__items {
    display: flex;
    flex-direction: column;
  }

  .nav__item {
    position: relative;
    padding: 1rem 0rem 1rem 2rem;
    display: grid;
    grid-template-columns: 40px 1fr;
    cursor: pointer;
    align-items: center;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: ${(props) => props.theme.activeNavLinkHover};
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: ${(props) => props.theme.borderSelectedPage};
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      z-index: 2;
      line-height: 0;
    }

    i {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colorIcons};
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .active {
    background-color: ${(props) => props.theme.activeNavLink};

    i,
    a {
      color: ${(props) => props.theme.colorIcons2};
    }
  }

  .active::before {
    width: 0.3rem;
  }

  .logout__btn {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: red;
    max-width: max-content;
    margin: 0 auto;
    padding: 8px 24px;
    border-radius: 4px;
    color: white;
    margin-bottom: 1rem;
  }
`;
