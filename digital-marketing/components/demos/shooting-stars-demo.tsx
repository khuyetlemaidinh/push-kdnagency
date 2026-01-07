import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Tốc độ triển khai vượt trội",
    description:
      "Thời gian hoàn thiện từ 3-4 tuần cho hầu hết các dự án. Vui lòng liên hệ với chúng tôi để biết thêm thông tin.",
  },
  {
    icon: "/icons/design.svg",
    title: "Thiết kế & Phát triển",
    description:
      "Chúng tôi thiết kế và phát triển website của bạn bằng những công nghệ và xu hướng mới nhất.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Khả năng mở rộng & Bảo trì ",
    description: "Chúng tôi cung cấp dịch vụ bảo trì và mở rộng linh hoạt cho mọi website.",
  },
  {
    icon: "/icons/team.svg",
    title: "Đội ngũ chuyên gia",
    description: "Đội ngũ chuyên gia giàu kinh nghiệm, sẵn sàng hỗ trợ bạn mọi lúc.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Xây dựng an toàn",
    description:
      "Áp dụng quy trình phát triển an toàn, đảm bảo dữ liệu của bạn luôn được bảo mật.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Theo dõi & Phân tích",
    description: "Theo dõi hiệu suất và tiến độ phát triển với hệ thống phân tích tích hợp.",
  },

  {
    icon: "/icons/flexible.svg",
    title: "Website linh hoạt",
    description: "Xây dựng các giải pháp động, dễ quản lý và dễ mở rộng.",
  },
  {
    icon: "/icons/support.svg",
    title: "Hỗ trợ 24/7",
    description:
      "Chúng tôi hỗ trợ khách hàng 24/7. Liên hệ ngay để được tư vấn chi tiết.",
  },
  {
    icon: "/icons/money.svg",
    title: "Chi phí hợp lý",
    description: "Mức giá hợp lý, phù hợp với mọi nhu cầu và ngân sách.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
       Những cam kết của chúng tôi dành cho bạn.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          Chúng tôi đảm bảo chất lượng công việc cao nhất, với thời gian giao hàng nhanh nhất.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
