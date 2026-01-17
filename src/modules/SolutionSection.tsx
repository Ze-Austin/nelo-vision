const SolutionSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-4 lg:gap-8 px-6 lg:px-24 pt-4 lg:pt-0 pb-12 lg:pb-16"
    >
      <h4 className="text-center">
        What problems do we solve for you?
      </h4>
      <div className="text-solve grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-24">
        <div className="flex flex-col gap-2 lg:gap-4">
          <span className="flex gap-1.5">
            <span>1.</span>
            <span>Confusion and chaos that keep you stuck and overwhelmed.</span>
          </span>
          <hr className="border-[#71B181]"/>
          <span className="flex gap-1.5">
            <span>2.</span>
            <span>Weak identity and self concept that erode confidence and direction.</span>
          </span>
          <hr className="border-[#71B181]"/>
          <span className="flex gap-1.5">
            <span>3.</span>
            <span>Loss of personal agency — the feeling of not being in control of your life.</span>
          </span>
          <hr className="border-[#71B181]"/>
          <span className="flex gap-1.5">
            <span>4.</span>
            <span>Lack of purpose and vision leaving you uncertain about your path.</span>
          </span>
          <hr className="border-[#71B181] lg:hidden"/>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4">
          <span className="flex gap-1.5">
            <span>5.</span>
            <span>Poor execution of goals due to missing systems and execution engines.</span>
          </span>
          <hr className="border-[#71B181]"/>
          <span className="flex gap-1.5">
            <span>6.</span>
            <span>Inconsistent follow-through even when the vision is clear.</span>
          </span>
          <hr className="border-[#71B181]"/>
          <span className="flex gap-1.5">
            <span>7.</span>
            <span>
              Misalignment with your life assignment causing inner conflict and dissatisfaction.
            </span>
          </span>
        </div>
      </div>
    </section>
  )
};

export default SolutionSection;