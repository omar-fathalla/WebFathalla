function Frame() {
  return <div className="absolute bg-[#ff7f00] h-[174px] left-0 top-[4px] w-[9px]" />;
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame />
      <p className="absolute capitalize font-['Afacad:Regular',sans-serif] font-normal leading-[30px] left-[15.53px] text-[#3b3b3b] text-[20px] top-0 w-[774.472px]" dir="auto">
        <span>
          Our visit was full of hope.
          <br aria-hidden="true" />
          {`Compassionate hearts that care for children's surgeries, revive humanity and compassion in society.`}
          <br aria-hidden="true" />
          The Messenger of God, may God bless him and grant him peace, said: “
        </span>
        <span className="font-['Afacad:Bold',sans-serif] font-bold">The most beloved of people to God Almighty are those who are most beneficial to people, and the most beloved of deeds to God Almighty is the joy that He brings to a Muslim, or removes distress from him</span>.”
      </p>
    </div>
  );
}