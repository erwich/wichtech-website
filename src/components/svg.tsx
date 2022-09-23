/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
        {` `}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 42`,
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: `0 0 100 100`,
  },
  bassClef: {
    shape: (
      <g transform="translate(-80.598 -338.39)">
        <path id="path861" stroke-width=".45574" d="m94.574 338.62c-8.785 0.21-15.515 6.36-13.334 15.79 0.002 0.01 0.013 0.02 0.016 0.03 0.256 3.25 2.96 5.81 6.276 5.81 3.485 0 6.309-2.82 6.309-6.3 0-3.08-2.191-5.64-5.098-6.2-1.158-0.41-2.896-1.34-2.82-2.84 0.036-0.74 0.903-2.09 2.294-2.77 1.691-0.79 3.434-1.22 5.194-0.86 2.667 0.49 9.489 5.39 10.019 13.88 0.31 6.44-3.31 15.15-6.849 19.27-5.698 6.51-14.851 10.55-13.955 11.27 0.803 0.72 11.61-4.22 17.237-10.42 6.867-7.44 10.267-13.64 9.937-21.17-0.19-7.54-6.03-15.7-15.226-15.49z"/>
        <path id="path1877" stroke-linejoin="round" d="m116.86 36.473a9.7721 9.1613 0 1 1 -19.546 0 9.7721 9.1613 0 1 1 19.546 0z" transform="matrix(.50978 0 0 .50978 61.959 329.32)" stroke-linecap="round" stroke-width=".894"/>
        <path id="path2766" stroke-linejoin="round" d="m116.86 36.473a9.7721 9.1613 0 1 1 -19.546 0 9.7721 9.1613 0 1 1 19.546 0z" transform="matrix(.50978 0 0 .50978 61.959 342.37)" stroke-linecap="round" stroke-width=".894"/>
      </g>
    ),
    viewBox: `0 0 100 100`,
  },
  trebleClef: {
    shape: (
      <path id="path26" fill="none" d="m51.688 5.25c-5.427-0.1409-11.774 12.818-11.563 24.375 0.049 3.52 1.16 10.659 2.781 19.625-10.223 10.581-22.094 21.44-22.094 35.688-0.163 13.057 7.817 29.692 26.75 29.532 2.906-0.02 5.521-0.38 7.844-1 1.731 9.49 2.882 16.98 2.875 20.44 0.061 13.64-17.86 14.99-18.719 7.15 3.777-0.13 6.782-3.13 6.782-6.84 0-3.79-3.138-6.88-7.032-6.88-2.141 0-4.049 0.94-5.343 2.41-0.03 0.03-0.065 0.06-0.094 0.09-0.292 0.31-0.538 0.68-0.781 1.1-0.798 1.35-1.316 3.29-1.344 6.06 0 11.42 28.875 18.77 28.875-3.75 0.045-3.03-1.258-10.72-3.156-20.41 20.603-7.45 15.427-38.04-3.531-38.184-1.47 0.015-2.887 0.186-4.25 0.532-1.08-5.197-2.122-10.241-3.032-14.876 7.199-7.071 13.485-16.224 13.344-33.093 0.022-12.114-4.014-21.828-8.312-21.969zm1.281 11.719c2.456-0.237 4.406 2.043 4.406 7.062 0.199 8.62-5.84 16.148-13.031 23.719-0.688-4.147-1.139-7.507-1.188-9.5 0.204-13.466 5.719-20.886 9.813-21.281zm-7.719 44.687c0.877 4.515 1.824 9.272 2.781 14.063-12.548 4.464-18.57 21.954-0.781 29.781-10.843-9.231-5.506-20.158 2.312-22.062 1.966 9.816 3.886 19.502 5.438 27.872-2.107 0.74-4.566 1.17-7.438 1.19-7.181 0-21.531-4.57-21.531-21.875 0-14.494 10.047-20.384 19.219-28.969zm6.094 21.469c0.313-0.019 0.652-0.011 0.968 0 13.063 0 17.99 20.745 4.688 27.375-1.655-8.32-3.662-17.86-5.656-27.375z"/>
    ),
    viewBox: `0 0 100 150`,
  },
  christianCross: {
    shape: (
      <g id="layer1" transform="translate(0 -868.11)">
        <g id="g6699-2"  stroke-linecap="square" transform="translate(248.82 496.31)">
          <path id="path2821-4-7-8-3" stroke-width="6.0451px" d="m-188.57 425.07v121.39"/>
          <path id="path2823-1-2-94-4" stroke-width="5.9892px" d="m-233.07 425.04h44.526"/>
          <path id="path2821-6-5-6-45-3" stroke-width="6.0451px" d="m-177.43 425.07v121.39"/>
          <path id="path2823-9-97-2-8-4" stroke-width="5.9892px" d="m-132.93 425.04h-44.526"/>
          <path id="path2823-7-8-0-7-6" stroke-width="5.9892px" d="m-233.07 414.01h44.526"/>
          <path id="path2823-7-5-83-3-8-2" stroke-width="6.0272" d="m-188.56 381.39v32.579"/>
          <path id="path2823-7-2-9-3-8-2" stroke-width="5.9892px" d="m-132.93 413.99h-44.526"/>
          <path id="path2823-7-5-83-3-8-6-1" stroke-width="6.0272" d="m-177.44 381.39v32.579"/>
        </g>
      </g>
    ),
    viewBox: `0 0 150 150`,
  },
  code: {
    shape: (
      <React.Fragment>
        <path d="M455.5,40h-400C24.897,40,0,64.897,0,95.5v320C0,446.103,24.897,471,55.5,471h400c30.603,0,55.5-24.897,55.5-55.5v-320
          C511,64.897,486.103,40,455.5,40z M496,415.5c0,22.332-18.168,40.5-40.5,40.5h-400C33.168,456,15,437.832,15,415.5v-320
          C15,73.168,33.168,55,55.5,55h400c22.332,0,40.5,18.168,40.5,40.5V415.5z"/>
        <path d="M471.5,120h-432c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h432c4.142,0,7.5-3.357,7.5-7.5S475.642,120,471.5,120z"/>
        <path d="M55.5,95c1.98,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.32,2.2-5.3c0-1.971-0.8-3.91-2.2-5.3c-1.39-1.4-3.32-2.2-5.3-2.2
          s-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.329-2.2,5.3c0,1.979,0.8,3.91,2.2,5.3C51.59,94.2,53.52,95,55.5,95z"/>
        <path d="M119.5,95c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.32,2.2-5.3c0-1.971-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2
          c-1.98,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.329-2.2,5.3c0,1.979,0.8,3.91,2.2,5.3C115.59,94.2,117.52,95,119.5,95z"/>
        <path d="M87.5,95c1.98,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.32,2.2-5.3c0-1.971-0.8-3.91-2.2-5.3c-1.39-1.4-3.32-2.2-5.3-2.2
          c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.329-2.2,5.3c0,1.979,0.8,3.91,2.2,5.3C83.59,94.2,85.53,95,87.5,95z"/>
        <path d="M188.803,210.196c-2.929-2.928-7.678-2.928-10.606,0l-80,80c-2.929,2.93-2.929,7.678,0,10.607l80,80
          c1.464,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.303-2.196c2.929-2.93,2.929-7.678,0-10.607L114.106,295.5l74.697-74.696
          C191.732,217.874,191.732,213.126,188.803,210.196z"/>
        <path d="M332.803,210.196c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607l74.697,74.696l-74.697,74.696
          c-2.929,2.93-2.929,7.678,0,10.607c1.464,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.303-2.196l80-80
          c2.929-2.93,2.929-7.678,0-10.607L332.803,210.196z"/>
        <path d="M290.063,200.451c-3.892-1.412-8.195,0.594-9.611,4.485l-64,176c-1.416,3.894,0.592,8.196,4.485,9.612
          c0.846,0.308,1.711,0.453,2.563,0.453c3.064,0,5.941-1.893,7.049-4.938l64-176C295.964,206.17,293.956,201.867,290.063,200.451z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 511 511`,
  },
  church: {
    shape: (
      <React.Fragment>
        <path d="M15.021,20.5H9v6H4v6.021l5-0.018v14.985l6.018,0.068V32.515L20,32.497V26.5h-4.997L15.021,20.5z M18,28.5v2.003
          l-4.982,0.018v15.013L11,45.511V30.497l-5,0.018V28.5h5v-6h2.015l-0.018,6H18z"/>
        <path d="M59.292,29.544L24,18.76V2.5c0-0.386-0.223-0.738-0.572-0.904c-0.35-0.166-0.763-0.115-1.062,0.13l-22,18
          C0.135,19.916,0,20.2,0,20.5v37c0,0.552,0.448,1,1,1h22h4h7h4h7h4h6h4c0.552,0,1-0.448,1-1v-27
          C60,30.06,59.713,29.672,59.292,29.544z M2,20.974L22,4.61V19.5v37H2V20.974z M29,56.5v-16h3v16H29z M40,56.5v-22h3v22H40z
          M51,56.5v-16h2v16H51z M58,56.5h-3v-18h-6v18h-4v-24h-7v24h-4v-18h-7v18h-3V20.851L58,31.24V56.5z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 60 60`
  },
  coffee: {
    shape: (
      <React.Fragment>
        <path d="M202.5,115h30c0-10.697,2.433-15.359,5.799-21.812c4.1-7.857,9.201-17.636,9.201-35.688s-5.102-27.831-9.201-35.688
          C234.933,15.359,232.5,10.697,232.5,0h-30c0,18.053,5.102,27.831,9.201,35.688c3.366,6.452,5.799,11.114,5.799,21.812
          s-2.433,15.359-5.799,21.812C207.602,87.169,202.5,96.947,202.5,115z"/>
        <path d="M131.5,115h30c0-10.697,2.433-15.359,5.799-21.812c4.1-7.857,9.201-17.636,9.201-35.688s-5.102-27.831-9.201-35.688
          C163.933,15.359,161.5,10.697,161.5,0h-30c0,18.053,5.102,27.831,9.201,35.688c3.366,6.452,5.799,11.114,5.799,21.812
          s-2.433,15.359-5.799,21.812C136.602,87.169,131.5,96.947,131.5,115z"/>
        <path d="M317.5,205c-1.668,0-3.335,0.048-5,0.127V145h-260v265c0,35.841,29.159,65,65,65h130c34.203,0,62.3-26.56,64.799-60.135
          c1.732,0.085,3.466,0.135,5.201,0.135c57.897,0,105-47.103,105-105C422.5,252.103,375.397,205,317.5,205z M282.5,410
          c0,19.299-15.701,35-35,35h-130c-19.299,0-35-15.701-35-35V175h200V410z M317.5,385c-1.67,0-3.337-0.062-5-0.172V235.172
          c1.663-0.11,3.33-0.172,5-0.172c41.355,0,75,33.645,75,75C392.5,351.355,358.855,385,317.5,385z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 475 475`
  },
  pizza: {
    shape: (
      <React.Fragment>
        <path d="M140.627,18.75h-0.001h-4.688C60.985,18.75,0.001,79.73,0.001,154.688s60.984,135.938,135.938,135.938
          s135.938-60.98,135.938-135.938V150h-131.25V18.75z M238.946,159.375c-2.461,54.694-47.714,98.438-103.008,98.438
          c-27.661,0-52.786-10.8-71.316-28.5c8.583-1.716,15.066-9.3,15.066-18.375c0-10.341-8.409-18.75-18.75-18.75v9.375
          c5.17,0,9.375,4.205,9.375,9.375s-4.205,9.375-9.375,9.375v5.142c-16.425-17.4-26.925-40.5-28.027-66.281l-9.366,0.403
          c2.578,60.342,51.947,107.611,112.392,107.611c60.459,0,109.912-47.948,112.383-107.813h14.095
          c-2.475,67.627-58.256,121.875-126.478,121.875c-69.787,0-126.563-56.775-126.563-126.563
          C9.376,86.47,63.623,30.68,131.251,28.209V42.3C72.962,44.672,26.058,91.027,23.542,149.798l9.366,0.403
          c2.302-53.733,45.108-96.033,98.344-98.409v107.583H238.946z"/>
        <path d="M188.667,4.284C177.633,1.444,166.196,0,154.688,0h-4.688v140.625h140.625v-4.688
          C290.625,73.87,248.701,19.734,188.667,4.284z M159.376,9.459c9.131,0.333,18.183,1.646,26.958,3.905
          c20.92,5.386,39.441,15.853,54.473,29.831l-9.97,9.97c-11.892-10.941-26.123-19.383-41.916-24.422
          c-9.553-3.047-19.477-4.711-29.545-5.128V9.459z M166.003,131.251l29.498-29.498l-6.628-6.63l-29.498,29.498v-91.63
          c9.098,0.408,18.066,1.931,26.695,4.683c14.344,4.575,27.295,12.216,38.133,22.116l-25.959,25.959l6.628,6.628l25.959-25.959
          c9.9,10.842,17.536,23.784,22.116,38.133c2.756,8.63,4.275,17.597,4.683,26.7H166.003z M267.01,131.255v-0.005
          c-0.413-10.073-2.077-20.002-5.128-29.55c-5.039-15.787-13.481-30.019-24.422-41.906l9.98-9.98
          c20.152,21.731,32.583,50.377,33.722,81.441H267.01z"/>
        <path d="M117.188,164.063c0-12.923-10.514-23.438-23.438-23.438s-23.438,10.514-23.438,23.438S80.828,187.5,93.751,187.5
          S117.188,176.986,117.188,164.063z M93.751,178.125c-7.753,0-14.063-6.309-14.063-14.063c0-7.754,6.31-14.062,14.063-14.062
          s14.063,6.309,14.063,14.063C107.813,171.817,101.503,178.125,93.751,178.125z"/>
        <polygon points="126.563,220.312 126.563,220.312 126.563,220.313 			"/>
        <path d="M126.563,220.312c0-7.753-6.309-14.062-14.063-14.062c-7.754,0-14.063,6.309-14.063,14.063
          c0,7.754,6.309,14.063,14.063,14.063V225c-2.588,0-4.688-2.105-4.688-4.688s2.1-4.688,4.688-4.688s4.688,2.105,4.688,4.688
          H126.563z"/>
        <path d="M196.876,201.563c10.341,0,18.75-8.409,18.75-18.75h-9.375c0,5.17-4.205,9.375-9.375,9.375s-9.37-4.205-9.37-9.375
          s4.2-9.375,9.37-9.375v-9.375c-10.336,0-18.745,8.409-18.745,18.75S186.54,201.563,196.876,201.563z"/>
        <path d="M103.126,117.188c10.341,0,18.75-8.409,18.75-18.75s-8.409-18.75-18.75-18.75v9.375c5.17,0,9.375,4.205,9.375,9.375
          s-4.205,9.375-9.375,9.375s-9.375-4.205-9.375-9.375h-9.375C84.376,108.778,92.785,117.188,103.126,117.188z"/>
        <path d="M75.001,126.563c0-7.753-6.309-14.063-14.063-14.063c-7.754,0-14.063,6.309-14.063,14.063
          c0,7.754,6.309,14.063,14.063,14.063C68.691,140.626,75.001,134.316,75.001,126.563z M60.938,131.25
          c-2.588,0-4.688-2.105-4.688-4.688s2.1-4.688,4.688-4.688s4.688,2.105,4.688,4.688C65.626,129.145,63.526,131.25,60.938,131.25z"
          />
        <path d="M225.001,89.063c-10.341,0-18.75,8.409-18.75,18.75s8.409,18.75,18.75,18.75s18.75-8.409,18.75-18.75
          S235.342,89.063,225.001,89.063z M225.001,117.188c-5.17,0-9.375-4.205-9.375-9.375s4.205-9.375,9.375-9.375
          s9.375,4.205,9.375,9.375S230.17,117.188,225.001,117.188z"/>
        <path d="M201.563,70.313c0-10.341-8.409-18.75-18.75-18.75s-18.75,8.409-18.75,18.75h9.375c0-5.17,4.205-9.375,9.375-9.375
          c5.17,0,9.375,4.205,9.375,9.375s-4.205,9.375-9.375,9.375v9.375C193.154,89.063,201.563,80.653,201.563,70.313z"/>
        <path d="M145.313,220.313c0,10.341,8.409,18.75,18.75,18.75s18.75-8.409,18.75-18.75s-8.409-18.75-18.75-18.75
          S145.313,209.972,145.313,220.313z M164.063,210.938c5.17,0,9.375,4.205,9.375,9.375s-4.205,9.375-9.375,9.375
          c-5.17,0-9.375-4.205-9.375-9.375S158.893,210.938,164.063,210.938z"/>
        <path d="M126.563,178.125c0,7.753,6.309,14.063,14.063,14.063c7.754,0,14.063-6.309,14.063-14.063
          c0-7.754-6.309-14.063-14.063-14.063C132.873,164.062,126.563,170.372,126.563,178.125z M140.626,173.438
          c2.587,0,4.688,2.105,4.688,4.688s-2.1,4.688-4.688,4.688s-4.688-2.105-4.688-4.688S138.039,173.438,140.626,173.438z"/>
        <rect x="117.188" y="243.75" width="14.063" height="9.375"/>
        
          <rect x="38.42" y="171.098" transform="matrix(-0.5547 -0.8321 0.8321 -0.5547 -73.3934 312.291)" width="16.905" height="9.375"/>
        
          <rect x="196.875" y="213.685" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 188.3057 518.6241)" width="9.375" height="13.256"/>
        <rect x="103.126" y="192.188" width="14.063" height="9.375"/>
        
          <rect x="115.247" y="121.875" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 297.5475 129.8762)" width="13.256" height="9.375"/>
        <rect x="58.998" y="93.751" transform="matrix(0.7071 0.7071 -0.7071 0.7071 88.8278 -17.5724)" width="13.256" height="9.375"/>
        <rect x="103.126" y="60.938" width="14.063" height="9.375"/>
        <rect x="164.063" y="93.75" width="9.375" height="14.063"/>
        
          <rect x="190.246" y="117.184" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 249.9088 347.2574)" width="13.256" height="9.375"/>
        
          <rect x="194.934" y="46.876" transform="matrix(0.7071 0.7071 -0.7071 0.7071 95.4971 -127.4228)" width="13.256" height="9.375"/>
        <rect x="220.313" y="164.063" width="9.375" height="14.063"/>
      </React.Fragment>
    ),
    viewBox: `0 0 300 300`
  },
  nodejs: {
    shape: (
      <React.Fragment>
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 24 24`,
  },
  python: {
    shape: (
      <React.Fragment>
        <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 24 24`,
  },
  network: {
    shape: (
      <React.Fragment>
        <path d="M49,0c-3.309,0-6,2.691-6,6c0,1.035,0.263,2.009,0.726,2.86l-9.829,9.829C32.542,17.634,30.846,17,29,17
          s-3.542,0.634-4.898,1.688l-7.669-7.669C16.785,10.424,17,9.74,17,9c0-2.206-1.794-4-4-4S9,6.794,9,9s1.794,4,4,4
          c0.74,0,1.424-0.215,2.019-0.567l7.669,7.669C21.634,21.458,21,23.154,21,25s0.634,3.542,1.688,4.897L10.024,42.562
          C8.958,41.595,7.549,41,6,41c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6c0-1.035-0.263-2.009-0.726-2.86l12.829-12.829
          c1.106,0.86,2.44,1.436,3.898,1.619v10.16c-2.833,0.478-5,2.942-5,5.91c0,3.309,2.691,6,6,6s6-2.691,6-6c0-2.967-2.167-5.431-5-5.91
          v-10.16c1.458-0.183,2.792-0.759,3.898-1.619l7.669,7.669C41.215,39.576,41,40.26,41,41c0,2.206,1.794,4,4,4s4-1.794,4-4
          s-1.794-4-4-4c-0.74,0-1.424,0.215-2.019,0.567l-7.669-7.669C36.366,28.542,37,26.846,37,25s-0.634-3.542-1.688-4.897l9.665-9.665
          C46.042,11.405,47.451,12,49,12c3.309,0,6-2.691,6-6S52.309,0,49,0z M11,9c0-1.103,0.897-2,2-2s2,0.897,2,2s-0.897,2-2,2
          S11,10.103,11,9z M6,51c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S8.206,51,6,51z M33,49c0,2.206-1.794,4-4,4s-4-1.794-4-4
          s1.794-4,4-4S33,46.794,33,49z M29,31c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S32.309,31,29,31z M47,41c0,1.103-0.897,2-2,2
          s-2-0.897-2-2s0.897-2,2-2S47,39.897,47,41z M49,10c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S51.206,10,49,10z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 55 55`
  },
  musicNotes: {
    shape: (
      <React.Fragment>
        <path d="M371.856,2.178c-2.382-1.897-5.5-2.606-8.467-1.925L135.276,52.595c-4.543,1.042-7.764,5.085-7.764,9.747v201.701
          c-12.726-13.011-30.457-21.108-50.051-21.108c-38.626,0-70.051,31.425-70.051,70.051c0,38.626,31.425,70.051,70.051,70.051
          c38.626,0,70.051-31.425,70.051-70.051V160.743l208.113-47.752v98.71c-12.726-13.011-30.457-21.108-50.051-21.108
          c-38.626,0-70.051,31.425-70.051,70.051c0,38.626,31.425,70.051,70.051,70.051c38.626,0,70.051-31.425,70.051-70.051V10
          C375.626,6.955,374.238,4.075,371.856,2.178z M77.461,363.036c-27.598,0-50.051-22.453-50.051-50.051s22.453-50.051,50.051-50.051
          s50.051,22.453,50.051,50.051S105.059,363.036,77.461,363.036z M305.575,310.695c-27.598,0-50.051-22.453-50.051-50.051
          s22.453-50.051,50.051-50.051s50.051,22.453,50.051,50.051S333.173,310.695,305.575,310.695z M147.513,140.224V70.307
          l208.113-47.752v69.917L147.513,140.224z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 385 385`
  }
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross" | "bassClef" | 
  "christianCross" | "trebleClef" | "react" | "code" | "church" | "coffee" | "pizza" | "node" | "python" |
  "network" | "musicNotes"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const SVG = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

const validIcons = Object.keys(icons)

export {
  validIcons
}

export default SVG