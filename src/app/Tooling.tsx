import { ContainerLayout } from "@/components/layouts/ContainerLayout";
import { appConfig } from "@/configs/appConfig";

export const Tooling = () => {
  return (
    <section className="bg-gray-50/50 py-16">
      <ContainerLayout>
        <div className="flex flex-col gap-16 [&_a]:block">
          <h2 className="sr-only">Tools</h2>
          <section>
            <h3 className="sr-only">Frameworks/Libraries</h3>
            <ul className="flex flex-wrap justify-center gap-8 [&_img]:h-12">
              <li>
                <a href="https://vite.dev/" aria-label="Vite">
                  <img src={`${appConfig.basePath}/logos/vite.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://react.dev/">
                  <img src={`${appConfig.basePath}/logos/react.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.solidjs.com/" aria-label="SolidJS">
                  <img src={`${appConfig.basePath}/logos/solid.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://svelte.dev/" aria-label="Svelte">
                  <img src={`${appConfig.basePath}/logos/svelte.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://vuejs.org/" aria-label="VueJS">
                  <img src={`${appConfig.basePath}/logos/vue.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/" aria-label="NextJS">
                  <img src={`${appConfig.basePath}/logos/next.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" aria-label="JavaScript">
                  <img src={`${appConfig.basePath}/logos/javascript.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/" aria-label="TypeScript">
                  <img src={`${appConfig.basePath}/logos/typescript.svg`} alt="" />
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="sr-only">Styling</h3>
            <ul className="flex flex-wrap justify-center gap-12 [&_img]:h-16 [&_img]:max-w-[200%]">
              <li>
                <a href="https://sass-lang.com/" aria-label="Sass">
                  <img src={`${appConfig.basePath}/logos/sass.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://postcss.org/" aria-label="PostCSS">
                  <img src={`${appConfig.basePath}/logos/postcss.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" aria-label="TailwindCSS">
                  <img src={`${appConfig.basePath}/logos/tailwindcss.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://stylus-lang.com/" aria-label="Stylus">
                  <img src={`${appConfig.basePath}/logos/stylus.svg`} alt="" />
                </a>
              </li>
              <li>
                <a href="https://lesscss.org/" aria-label="Less">
                  <img src={`${appConfig.basePath}/logos/less.png`} alt="" />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </ContainerLayout>
    </section>
  );
};
