import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex fle flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping jopurney that redefines your experience with
          unbeatable deals. From premier selections to incredible saving, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm if possibilities designed to fulfill your unique
          desires, surpssing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-8 flex gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" text="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
