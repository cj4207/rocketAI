export default function SajuHead({ title }) {
  return (
    <thead>
      <tr>
        {title.map((item, index) => (
          <th
            key={`${item}-${index}`}
            className={`border-b px-5.5 py-3.5 text-[20px] ${
              index !== 0 && index !== title.length - 1
                ? "border-r-[#8A8A8A] border-r-[0.5px]"
                : "border-r"
            }`}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}
