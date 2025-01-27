export type PaginaProps = {
  title: string;
};

export function Pagina({ title }: PaginaProps) {
  return (
    <div className="text-center min-h-screen h-full flex flex-col justify-center items-center gap-y-20 w-full relative  py-7">
      <h1 className="text-4xl uppercase font-bold">{title}</h1>
    </div>
  );
}
