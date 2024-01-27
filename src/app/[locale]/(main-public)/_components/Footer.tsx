import { BsTelephone } from "react-icons/bs";
import type { FC } from "react";
import GreenfieldLocation from "@/src/components/GreenfieldLocation";
import { Link } from "@lib/next-ui";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer: FC = () => {
  return (
    <footer className="grid grid-cols-2 justify-items-center gap-y-8 rounded-t-md bg-primary px-4 py-8 text-sm text-foreground-100 sm:grid-cols-3 md:grid-cols-5 md:px-5 lg:grid-cols-6 lg:px-6 xl:px-7">
      <section className="col-span-3 max-w-md space-y-4 text-center md:col-span-2 md:justify-self-start md:text-left lg:col-span-3">
        <p className="text-base font-bold">
          Greenfield Campus [V.C.S.M matric. Hr. sec. School]
        </p>
        <GreenfieldLocation />
        <p className="flex items-center gap-2">
          <MdOutlineLocationOn />
          <span>
            11/34B, Udayampalayam Rd, Pallakattu Thottam, Gounder Mills,
            Coimbatore, Tamil Nadu 641029
          </span>
        </p>
        <p className="flex items-center gap-3">
          <BsTelephone />
          <span>+91 935 441 6441</span>
        </p>
      </section>
      <section className="space-y-4 md:justify-self-end">
        <h6 className="text-base font-bold">Student Links</h6>
        <ul className="space-y-2">
          <li>
            <Link href="#">Student Portal</Link>
          </li>
          <li>
            <Link href="#">Student Email</Link>
          </li>
          <li>
            <Link href="#">Student Portal</Link>
          </li>
          <li>
            <Link href="#">Student Portal</Link>
          </li>
        </ul>
      </section>
      <section className="space-y-4 md:justify-self-end">
        <h6 className="text-base font-bold">Parental Links</h6>
        <ul className="space-y-2">
          <li>
            <Link href="#">Parental Portal</Link>
          </li>
          <li>
            <Link href="#">Parental Email</Link>
          </li>
          <li>
            <Link href="#">Parental Portal</Link>
          </li>
          <li>
            <Link href="#">Parental Portal</Link>
          </li>
        </ul>
      </section>
      <section className="col-span-2 space-y-4 text-center sm:col-auto sm:text-left md:justify-self-end">
        <h6 className="text-base font-bold">More about School</h6>
        <ul className="space-y-2">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Infrastructure</Link>
          </li>
          <li>
            <Link href="#">Gallery</Link>
          </li>
          <li>
            <Link href="#">Infirmary</Link>
          </li>
        </ul>
      </section>
      <hr className="col-span-2 w-full rounded-full border border-white text-white md:col-span-6" />
      <p className="col-span-2 text-center text-xs font-bold md:col-span-6">
        Greenfield Campus [ [V.C.S.M matric. Hr. sec. School]]@ {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
