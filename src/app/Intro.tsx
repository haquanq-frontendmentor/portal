import { Button } from "@/components/common/Button";
import { ContainerLayout } from "@/components/layouts/ContainerLayout";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Intro = () => {
  return (
    <section className="overflow-hidden">
      <ContainerLayout>
        <div className="grid items-center justify-items-center gap-16 pt-12 pb-24 lg:grid-cols-[37.5rem_auto] lg:py-32">
          <div className="flex items-start">
            <Image
              className="lg:col-start-2 lg:max-w-[200%]"
              src="/images/intro-image.png"
              alt=""
              width={607}
              height={480}
            />
          </div>
          <div className="flex flex-col items-center text-center lg:row-start-1 lg:items-start lg:text-start">
            <h1 className="mb-6 text-[clamp(2rem,0.0916rem+8.1425vw,4rem)] leading-[clamp(2.5rem,0.5916rem+8.1425vw,4.5rem)] font-bold">
              Solutions for Frontendmentor.io challenges
            </h1>
            <p className="mb-8 max-w-120 text-base leading-6">
              A collection of my Frontend Mentor challenge solutions that demonstrates responsive UI layouts, attention
              to details and usages of various technologies. Each project highlights practical problems in modern web
              development.
            </p>
            <Link className="rounded-lg" href="/solutions">
              <Button className="pr-4" asWrapper>
                View solutions
                <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};
