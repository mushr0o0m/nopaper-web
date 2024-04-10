import {FC} from 'react';
import {ColorType} from "../../utils/models/colorTypeEnum/color-type.enum.ts";
import './Star.css'

export interface StarProps {
    color: ColorType,
    isOn: boolean
}
const Star: FC<StarProps> = ({color, isOn, ...props}) => {

    return (
        <a {...props}>
            {isOn ? (
                <svg width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                    <image href={color} className='star--texture'/>
                    <path
                        d="M61.85 26.91C59.8532 22.2352 57.5791 17.6838 55.0399 13.28C51.7199 7.87 44.3799 0 44.3799 0C44.3799 0 37.56 8.91001 34.59 13.63C31.62 18.35 27.25 27.26 27.25 27.26C27.25 27.26 19.74 29.18 11.7 32.15C3.65995 35.12 0 37.92 0 37.92C0 37.92 5.05988 44.38 8.37988 48.58C11.2823 51.9587 14.4381 55.1112 17.8199 58.01C16.19 62.2306 15.0753 66.6324 14.5 71.12C13.63 78.28 13.2799 87.89 13.2799 87.89C13.2799 87.89 24.8099 86.15 30.5699 83.53C36.3299 80.91 45.5699 74.09 45.5699 74.09C51.2621 77.2201 57.1589 79.963 63.22 82.3C68.6719 84.1239 74.2884 85.4133 79.99 86.15C79.2859 80.9001 78.2369 75.7021 76.85 70.59C75.5984 66.2044 73.962 61.9378 71.96 57.84C71.96 57.84 76.85 52.77 82.09 46.48C85.11 42.9333 87.6363 38.9942 89.6 34.77C85.3987 32.2487 80.8738 30.3109 76.1499 29.01C71.4378 27.9788 66.6596 27.2771 61.85 26.91Z"
                        fill="url(#pattern0)"/>
                    <path d="M28.39 57.5C28.39 57.5 30.61 66.4 42.63 66.85C54.65 67.3 63.11 57.95 63.11 57.95"
                          stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M69.29 44.0599C67.8415 42.3161 66.0688 40.8695 64.0699 39.7999C61.6624 38.7213 58.9475 38.5439 56.42 39.2999C54.0214 40.0093 51.9166 41.4756 50.42 43.4799"
                        stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M52.66 41.04C52.5032 40.2799 52.1237 39.5837 51.5699 39.04C50.9649 38.6904 50.2652 38.5399 49.5699 38.61"
                        stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M56.1801 39.2299L55.84 38.5299C55.6556 38.0815 55.41 37.6608 55.11 37.2799C54.7856 36.8825 54.3331 36.6103 53.83 36.5099"
                        stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M60.1899 38.76C60.259 38.105 60.1848 37.4429 59.9724 36.8195C59.76 36.1962 59.4145 35.6265 58.96 35.15"
                        stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M63.16 39.4399C63.3766 39.2932 63.5598 39.1025 63.6976 38.8803C63.8355 38.658 63.9248 38.4091 63.96 38.1499C64.0801 37.2918 64.1003 36.4227 64.02 35.5599"
                        stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M65.66 40.59C66.4774 40.2789 67.1702 39.7086 67.6326 38.9663C68.0949 38.2241 68.3012 37.3507 68.22 36.48"
                        stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M41.26 42.49C40.93 41.49 36.92 39.89 32.53 40.25C28.14 40.61 26.6 42.74 25.13 44.34"
                          stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27 42.16C27.06 40.52 25.62 38.44 24 38.31" stroke="#EDEDEE" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M30.22 40.33C30.1687 39.3838 29.8497 38.4718 29.3 37.7C29.1008 37.2991 28.82 36.9444 28.4756 36.6585C28.1312 36.3726 27.7307 36.1619 27.3 36.04"
                        stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M34.62 40C34.7443 38.1766 34.14 36.3784 32.9399 35" stroke="#EDEDEE" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M38.64 40.33C38.8863 39.5462 38.9691 38.7202 38.8831 37.9031C38.797 37.0861 38.5441 36.2953 38.14 35.58"
                        stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M30.2601 40.93C29.8509 41.2464 29.5305 41.6632 29.33 42.14C28.8372 43.1558 28.6232 44.2843 28.71 45.41C28.719 45.914 28.8679 46.4057 29.1401 46.83C29.4513 47.2238 29.8671 47.5218 30.34 47.69C31.2707 48.0688 32.2864 48.1897 33.2801 48.04C34.2808 47.8534 35.1974 47.3566 35.9001 46.62C36.1405 46.428 36.3556 46.2062 36.5401 45.96C36.8209 45.4252 36.9456 44.8223 36.9001 44.22C36.9443 42.9366 36.5254 41.6801 35.72 40.68C35.5559 40.4925 35.3456 40.3512 35.11 40.27C34.5709 40.0346 33.9883 39.9153 33.4001 39.92C32.2728 39.9155 31.1733 40.2692 30.2601 40.93Z"
                        fill="#EDEDEE"/>
                    <path
                        d="M34.79 41.89L34.64 41.74C34.1663 41.3819 33.5835 41.1983 32.99 41.22H32.52C32.38 41.22 32.26 41.22 32.12 41.22C31.5902 41.4531 31.1289 41.818 30.78 42.28C30.3244 42.9685 30.1034 43.7857 30.15 44.61C30.152 44.8257 30.1788 45.0404 30.23 45.25C30.318 45.472 30.4469 45.6755 30.61 45.85C30.8958 46.2633 31.3185 46.5623 31.8035 46.6941C32.2884 46.8258 32.8043 46.7819 33.26 46.57C33.852 46.36 34.3768 45.9949 34.7795 45.513C35.1823 45.031 35.4484 44.4498 35.5501 43.83C35.5537 43.11 35.2817 42.4159 34.79 41.89Z"
                        fill="#6B6C6F"/>
                    <path
                        d="M57 40.01C56.5934 40.3289 56.2736 40.745 56.07 41.22C55.5873 42.2356 55.3739 43.3581 55.45 44.48C55.4657 44.9875 55.6178 45.4814 55.8901 45.91C56.2013 46.3037 56.6171 46.6018 57.09 46.77C58.425 47.3052 59.915 47.3052 61.25 46.77C61.7561 46.5727 62.2093 46.2604 62.5738 45.8577C62.9383 45.4551 63.204 44.9731 63.35 44.45C63.6076 43.852 63.7042 43.1969 63.63 42.55C63.5119 41.5237 63.1102 40.5507 62.47 39.74C62.3059 39.5525 62.0956 39.4112 61.86 39.33C61.3174 39.0946 60.7315 38.9754 60.1401 38.98C59.011 38.984 57.9121 39.3445 57 40.01Z"
                        fill="#EDEDEE"/>
                    <path
                        d="M61.72 41.13L61.57 40.98C61.0945 40.6262 60.5122 40.4462 59.9201 40.47H59.45C59.31 40.47 59.1901 40.47 59.0501 40.47C58.5223 40.7065 58.0616 41.0708 57.71 41.53C57.2557 42.219 57.0348 43.0359 57.08 43.86C57.0619 44.0868 57.0927 44.3149 57.1703 44.5289C57.248 44.7428 57.3707 44.9375 57.5301 45.1C57.8189 45.5125 58.2434 45.8106 58.7295 45.9422C59.2157 46.0738 59.7325 46.0305 60.19 45.82C60.781 45.613 61.3051 45.25 61.7065 44.7693C62.1079 44.2887 62.3717 43.7084 62.47 43.09C62.4846 42.3639 62.2156 41.6608 61.72 41.13Z"
                        fill="#6B6C6F"/>
                </svg>) : (
            <svg width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <image href={color} className='star--texture'/>
                <path
                    d="M61.85 27.8C59.8532 23.1252 57.5791 18.5738 55.0399 14.17C51.7199 8.76001 44.3799 0.890015 44.3799 0.890015C44.3799 0.890015 37.56 9.80002 34.59 14.52C31.62 19.24 27.25 28.15 27.25 28.15C27.25 28.15 19.74 30.07 11.7 33.04C3.65995 36.01 0 38.81 0 38.81C0 38.81 5.05988 45.27 8.37988 49.47C11.2823 52.8488 14.4381 56.0012 17.8199 58.9C16.19 63.1206 15.0753 67.5224 14.5 72.01C13.63 79.17 13.2799 88.78 13.2799 88.78C13.2799 88.78 24.8099 87.04 30.5699 84.42C36.3299 81.8 45.5699 74.98 45.5699 74.98C51.2621 78.1101 57.1589 80.853 63.22 83.19C68.6719 85.0139 74.2884 86.3034 79.99 87.04C79.2859 81.7901 78.2369 76.5922 76.85 71.48C75.5984 67.0944 73.962 62.8278 71.96 58.73C71.96 58.73 76.85 53.66 82.09 47.37C85.11 43.8233 87.6363 39.8842 89.6 35.66C85.3987 33.1387 80.8738 31.2009 76.1499 29.9C71.4378 28.8688 66.6596 28.1671 61.85 27.8Z"
                    fill="url(#pattern0)"/>
                <path d="M52.52 41.23C52.86 42.23 56.87 43.83 61.26 43.47C65.65 43.11 67.19 40.98 68.65 39.39"
                      stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M66.7899 41.56C66.7299 43.2 68.1699 45.28 69.7899 45.41" stroke="#EDEDEE" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M63.5599 43.37C63.6184 44.3116 63.9369 45.2186 64.48 45.99C64.6857 46.3972 64.9758 46.7559 65.3311 47.0421C65.6863 47.3284 66.0983 47.5355 66.5399 47.65"
                    stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M59.1699 43.72C59.0456 45.5434 59.6499 47.3416 60.85 48.72" stroke="#EDEDEE" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M55.1501 43.35C54.9001 44.1332 54.8155 44.9598 54.9015 45.7775C54.9876 46.5951 55.2425 47.3859 55.6501 48.1"
                    stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M24.47 39.66C25.9172 41.4012 27.686 42.8475 29.6799 43.92C32.0875 44.9986 34.8025 45.1761 37.33 44.42C39.7277 43.7087 41.8319 42.2427 43.33 40.24"
                    stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M41.13 42.68C41.2868 43.4401 41.6662 44.1363 42.22 44.68C42.8248 45.0303 43.5247 45.1807 44.22 45.11"
                    stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M37.61 44.49L37.9399 45.19C38.1317 45.6368 38.3804 46.057 38.6799 46.44C38.9978 46.8449 39.4533 47.1189 39.96 47.21"
                    stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M33.59 44.93C33.5234 45.5871 33.5998 46.2508 33.8138 46.8757C34.0279 47.5005 34.3745 48.0717 34.8299 48.55"
                    stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M30.63 44.29C30.4115 44.4322 30.2267 44.6205 30.0885 44.8416C29.9503 45.0626 29.8621 45.3113 29.83 45.57C29.7 46.4273 29.6799 47.2976 29.77 48.16"
                    stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M28.13 43.13C27.3108 43.4393 26.6157 44.0089 26.1515 44.7513C25.6872 45.4938 25.4794 46.3681 25.5599 47.24"
                    stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M41.53 60.27C41.53 60.27 44.16 64.27 47.35 64.17C50.54 64.07 53.02 59.98 53.02 59.98"
                      stroke="#EDEDEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
                )}
        </a>
    );
};

export default Star;