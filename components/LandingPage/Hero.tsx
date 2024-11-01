import Button from '../atoms/Button';
import HeroMap from './heroMap';

export default function Hero() {
  return (
    <section
      className={`py-12 flex flex-col gap-20 lg:flex-row justify-between items-center w-full`}
    >
      <div className="flex flex-col w-full">
        <h1 className="text-[2rem] xs:text-[3rem] md:text-[4rem] font-bold sm:leading-relaxed md:leading-[6rem] mb-4">
          We Make Your <br />
          <span className="text-[#07C589]">Smile</span> Our Priority.
        </h1>

        <p className="text-md sm:text-base md:text-xl mb-[2rem]">
          At DentClack, we are dedicated to one thing - your smile. With <br />
          over 10 years of professional experience and more than 100 <br />
          carefully selected dental practices, we are uniquely equipped to{' '}
          <br />
          provide personalized treatment and restore your desired smile.
        </p>

        <Button width="auto" size='md'>
          Book an Appointment
        </Button>
      </div>
      <div className="w-full max-w-[38rem] h-full overflow-hidden relative  grid grid-cols-2 grid-rows-2 gap-4 md:gap-7">
        {/* <Image src= {heroImgLinks.name} className="w-full h-ful object-cover" alt="jh" /> */}

        {/* <Image src={Nwanboje}  className="w-full h-ful object-cover" alt="jh"></Image> */}
        <HeroMap />
      </div>
    </section>
  );
}
