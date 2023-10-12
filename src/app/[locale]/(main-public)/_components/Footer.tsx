import Link from "next/link";
import type { FC } from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer: FC = () => {
  return (
    <footer className="grid grid-cols-2 justify-items-center gap-y-8 rounded-t-md bg-primary px-4 py-8 text-sm text-foreground-100 sm:grid-cols-3 md:grid-cols-5 md:px-5 lg:grid-cols-6 lg:px-6 xl:px-7">
      <section className="col-span-3 max-w-md space-y-4 text-center md:col-span-2 md:justify-self-start md:text-left lg:col-span-3">
        <p className="text-base font-bold">
          Greenfield Public School, Tamil Nadu
        </p>
        <iframe
          className="h-32 w-full rounded-md border-0 outline-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7155168074796!2d76.94687797475602!3d11.05994248910661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f626ffc42147%3A0xf398a88ed4aed02b!2sGreenfields%20Matriculation%20School!5e0!3m2!1sen!2sin!4v1696784362822!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
        <p className="flex items-center gap-2">
          <MdOutlineLocationOn className="h-12 w-12" />
          <span>
            11/34B, Udayampalayam Rd, Pallakattu Thottam, Gounder Mills,
            Coimbatore, Tamil Nadu 641029
          </span>
        </p>
        <p className="flex items-center gap-3">
          <BsTelephone className="h-5 w-5" />
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
        Greenfield School, Tamil Nadu @ {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;