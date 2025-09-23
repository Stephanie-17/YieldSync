import { summaryInfo } from "@/data/summaryInfo";
import React from "react";
import Image from "next/image";
import { recommendInfo } from "@/data/recommendationInfo";

const Dashboard = () => {
  return (
    // ✅ Remove flex-1 min-w-0 - let Layout handle it
    <div className="p-3 mb-10">
      <div className="header mt-3 mb-20 sm:mb-10">
        <h1 className="text-3xl">Dashboard</h1>
        <p className="ml-2 text-sm text-[#8498b9]">Overview of your assets and recommendations</p>
      </div>

      <div className="summary mb-20 sm:mb-10">
        <h2 className="text-2xl">Summary</h2>
        <div className="flex flex-col sm:flex-row gap-5 min-[1096px]:gap-12 mt-10 ml-3 sm:ml-10">
          {summaryInfo.map(summary => (
            <div className="bg-blue-950 p-3 rounded-2xl sm:w-[250px] h-[100px] min-[1096px]:w-xl min-[1096px]:h-[120px]" key={summary.id}>
              <h3 className="text-[#8498b9] mb-4">{summary.name}</h3>
              <p className="ml-3 font-semibold text-2xl">{summary.money ? `$${summary.value}` : `${summary.value}`}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="recommendations mb-20 sm:mb-10 flex flex-col w-full">
        <h2 className="text-2xl">Top Recommendations</h2>
        <div className="mt-7 flex flex-col gap-6 ml-3">
          {recommendInfo.map((rec) => (
            <div key={rec.id} className="bg-blue-950 rounded-2xl overflow-hidden flex flex-col w-full sm:max-w-[650px] md:max-w-[750px] min-[900px]:flex-col lg:max-w-[65%]">
              <div className="flex flex-col min-[900px]:flex-col">
                <Image
                  src="/recommendation-img.png"
                  alt="recommended pool image"
                  width={400}
                  height={100}
                  className="sm:w-[200px] h-auto rounded-2xl"
                />
                <div className="p-4 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-[#5fc0f8] uppercase">Recommended</span>
                  <h3 className="mt-2 font-semibold text-white">{rec.name}</h3>
                  <p className="text-sm text-[#8498b9]">{rec.risk}</p>
                </div>
              </div>
              <div className="p-4 sm:p-0 sm:ml-auto mr-3.5 flex sm:items-center sm:justify-end">
                <button className="bg-[#00a2ff] px-6 py-2 rounded-3xl text-white font-medium hover:bg-[#0090e6] transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <h2 className="text-2xl">Quick Actions</h2>
        <div className="quick-btns mt-4">
          <button className="w-[46%] py-3 lg:w-[400px] rounded-3xl bg-blue-950 mr-7 md:mr-7 cursor-pointer p-2">Manage Wallets</button>
          <button className="w-[46%] py-3 lg:w-[400px] cursor-pointer p-2 rounded-3xl bg-[#00a2ff]">Explore Pools</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
