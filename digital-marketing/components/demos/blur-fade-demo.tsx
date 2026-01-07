import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/anh2.png",
    title: "Website SaaS Biên Dịch Code",
    link: "https://doantotnghiep-pi.vercel.app/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/anh3.png",
    title: "Chợ Sinh Viên TDMU",
    link: "https://xemlaghien.top/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/anh1.png",
    title: "Đánh Dấu Thương Hiệu Mạnh Mẽ",
    link: "https://www.facebook.com/photo/?fbid=1166196472207815&set=a.597478445746290",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/anh4.png",
    title: "Chiến Lược Hoàn Hảo Của Chúng Tôi",
    link: "",
  },


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
