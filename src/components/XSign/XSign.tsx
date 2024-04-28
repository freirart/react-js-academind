import { SignProps } from '@/utils/helper';

export default function XSign({ invisible = false }: SignProps) {
  const classToAdd = invisible ? ' invisible' : '';
  return (
    <>
      <div
        className={
          `z-0 rounded absolute bg-special-red/90 md:w-32 w-28 md:h-3 h-2
          -rotate-45` + classToAdd
        }
      ></div>
      <div
        className={
          `z-10 rounded absolute bg-special-red/90 md:w-32 w-28 md:h-3 h-2
          rotate-45` + classToAdd
        }
      ></div>
    </>
  );
}
