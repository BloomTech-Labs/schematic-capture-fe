import React from "react";

const Spinner = ({ className, size }) => (
  <span className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "rgba(255, 255, 255, 0) none repeat scroll 0% 0%",
        display: "block"
      }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect x="17.5" y="30" width="15" height="40" fill="#072f50">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1.01010101010101s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="18;30;30"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.20202020202020202s"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1.01010101010101s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="64;40;40"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.20202020202020202s"
        ></animate>
      </rect>
      <rect x="42.5" y="30" width="15" height="40" fill="#1165a8">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1.01010101010101s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20.999999999999996;30;30"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.10101010101010101s"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1.01010101010101s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="58.00000000000001;40;40"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.10101010101010101s"
        ></animate>
      </rect>
      <rect x="67.5" y="30" width="15" height="40" fill="#8dcdff">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1.01010101010101s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20.999999999999996;30;30"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1.01010101010101s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="58.00000000000001;40;40"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        ></animate>
      </rect>
    </svg>
  </span>
);

export default Spinner;
