import { ContainerLayout } from "@/components/layouts/ContainerLayout";
import { appConfig } from "@/configs/appConfig";

export const Appreciation = () => {
  return (
    <section className="bg-gray-50/50">
      <ContainerLayout>
        <div className="flex flex-col items-center gap-10 pt-22 pb-30 text-center">
          <img src={`${appConfig.basePath}/images/thumb-up-image.png`} alt="" width={250} height={250} />
          <h2 className="max-w-120 text-[2.5rem] leading-12 font-bold text-gray-900">
            Hey there traveler! Thanks for stopping by.
          </h2>
        </div>
      </ContainerLayout>
    </section>
  );
};
