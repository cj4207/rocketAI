export default function SajuBody({ rows }) {
  return (
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={`${rowIndex}`}>
          {row.map((cells, cellIndex) => (
            <th
              key={`${cellIndex}`}
              className={`border-b p-[5px] text-xs ${
                cellIndex !== 0 && cellIndex !== row.length - 1
                  ? "border-r-[#8A8A8A] border-r-[0.5px]"
                  : "border-r"
              }`}
            >
              {cells.map((cell, index) => (
                <div
                  key={`${index}`}
                  className={`${
                    cell.color
                      ? `${cell.color} rounded-[12px] px-[14px] py-[10px]`
                      : ""
                  }`}
                >
                  <p
                    className={`${
                      cellIndex === 0 ? "text-[9px]" : "text-[14px]"
                    } ${cell.textColor ? `${cell.textColor}` : ""}`}
                  >
                    {cell.cn}
                  </p>
                  <p
                    className={`${
                      cellIndex === 0 ? "text-[7px]" : "text-[9px]"
                    } ${cell.textColor ? `${cell.textColor}` : ""}`}
                  >
                    ({cell.kor})
                  </p>
                </div>
              ))}
            </th>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
