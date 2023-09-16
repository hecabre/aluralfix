function PaginationNumber({ number, action, present }) {
  return (
    <p
      className={
        present
          ? `w-10 h-10 rounded-lg bg-[#102c53] opacity-60 text-white flex items-center justify-center`
          : `w-10 h-10 rounded-lg bg-[#102c53] text-white text-center flex items-center justify-center cursor-pointer`
      }
      onClick={action}
    >
      {number}
    </p>
  );
}

export default PaginationNumber;
