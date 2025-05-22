import SajuHead from "./SajuHead";
import SajuBody from "./SajuBody";
export default function SajuTable() {
  const sajuData = [
    ["", "時", "日", "月", "年"],
    [
      [{ kor: "십성", cn: "十星" }],
      [{ kor: "상관", cn: "傷官" }],
      [{ kor: "비견", cn: "比肩" }],
      [{ kor: "상관", cn: "傷官" }],
      [{ kor: "상관", cn: "傷官" }],
    ],
    [
      [{ kor: "천간", cn: "天干" }],
      [{ kor: "임", cn: "壬", color: "bg-[#2F2F2F]", textColor:'text-white' }],
      [{ kor: "정", cn: "丁", color: "bg-[#C23030]", textColor:'text-white' }],
      [{ kor: "계", cn: "癸", color: "bg-[#2F2F2F]", textColor:'text-white' }],
      [{ kor: "계", cn: "癸", color: "bg-[#2F2F2F]", textColor:'text-white' }],
    ],
    [
      [{ kor: "지지", cn: "地支" }],
      [{ kor: "인", cn: "寅", color: "bg-[#18868C]", textColor:'text-white' }],
      [{ kor: "사", cn: "巳", color: "bg-[#C23030]", textColor:'text-white' }],
      [{ kor: "해", cn: "亥", color: "bg-[#2F2F2F]", textColor:'text-white' }],
      [{ kor: "유", cn: "酉", color: "bg-[#F9F9F9] border border-[#000000]", textColor:'text-black' }],
    ],
    [
      [{ kor: "십성", cn: "十星" }],
      [{ kor: "비견", cn: "比肩" }],
      [{ kor: "겁재", cn: "劫財" }],
      [{ kor: "식신", cn: "食神" }],
      [{ kor: "편재", cn: "偏財" }],
    ],
    [
      [{ kor: "십이운성", cn: "十二運星" }],
      [{ kor: "사", cn: "死" }],
      [{ kor: "제왕", cn: "帝旺" }],
      [{ kor: "태", cn: "胎" }],
      [{ kor: "장생", cn: "長生" }],
    ],
    [
      [{ kor: "십이신살", cn: "十二神煞" }],
      [{ kor: "겁살", cn: "劫煞" }],
      [{ kor: "지살", cn: "地煞" }],
      [{ kor: "역마살", cn: "驛馬煞" }],
      [{ kor: "장성살", cn: "長生煞" }],
    ],
    [
      [{ kor: "귀인", cn: "貴人" }],
      [{ kor: "없음", cn: "" }],
      [{ kor: "없음", cn: "" }],
      [{ kor: "천을귀인", cn: "天乙" }],
      [
        { kor: "천을귀인", cn: "天乙" },

        { kor: "태극귀인", cn: "太極" },
        { kor: "문창귀인", cn: "文昌" },
      ],
    ],
  ];

  return (
    <div className="w-full max-w-[375px] mx-auto bg-[#F3F2EF] rounded-xl shadow-lg p-4 border border-gray-200">
      <div className="text-center mb-2">
        <div className="text-sm text-gray-500">김로켓님의 사주</div>
        <div className="text-lg font-bold">1980년 8월 27일 08:10</div>
      </div>
      <table className="w-full text-center border-collapse">
        <SajuHead title={sajuData[0]} />
        <SajuBody rows={sajuData.slice(1)} />
      </table>
      {/* 하단 여백/장식 등 */}
    </div>
  );
}
