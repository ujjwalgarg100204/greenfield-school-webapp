import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";

const routes = [
  {
    title: "SALT LAKE",
    routes: [
      "Hotel Hyatt EM Bypass Crossing – Tank No. 13 – Anandita Island – Laboni – PNB AB Block – Tank No. 3 – BD Market – Tank No. 4 – Kwality – Cap Camp Island – Tank No. 5 – Purta Bhawan – Baishakhi More – Tank No. 7 – AJ Bus Terminus – Tank No. 6 – City Centre – Bidhan Nagar Municipal Corporation School – Central Park – Tank No. 10 – Mishra – Tank No. 8 – Tank No. 9 – CK Market – FE PNB – GD Island – Tank No. 11 – Tank No. 12 – Tank No. 14 – Salt Lake Stadium Main Gate – Food Bazar – DPS Ruby park.",
    ],
  },
  {
    title: "SOUTH KOLKATA",
    routes: [
      "ICE Skating Rink – Mayfair Road – Ballygunge Post Office – Broad Street – Ballygunge Place – Kasba – Neelachal Complex – DPS Ruby Park.",

      "Behala Janakalyan – Behala Shilpara – BehalaSakher Bazar – Behala Chowrasta – JL Sarani Mani Tower – Taratola – New Alipore – Hindustan Sweets – TollygungePhari – Charu market – Mudially – Tollygunge PS – Southern Ave – Lake Road – Vivekanand Park – GarihatGolpark – Garihat More – DPS Ruby Park.",
      "Hastings – Khidderpore Crossing – Mominpur – Alipore SBI – Chetala Bridge – Rashbehari More – Southern Ave – Sarat Bose Road Crossing – Gariahat Trangular Park – Hindustan Park – Gariahat Crossing – DPS Ruby Park.",

      "Kalighat Fire Brigade – Harish park – Ganja Park – Bhawanipur – Elgin Road – Purna Cinema – Northern park – BalMandir – Neel Kamal Bldg (Elgin Road) – HazraLansdown Crossing – Ritchie Road – Ballygunge Circular Road – St. Lawrence School – BallygungePhari – Chaplin Park – Ekdalia – DPS Ruby park.",
      "Narendrapur Sugam Park – Kamalgazi More – Mahamayatala – Hindustan More – Fartabad More – KMD Bridge – Patuli – Garia Station – Peerless Hospital – Hiland Park – Bengal Ambuja – Calcutta Green – Abhishikta Complex – Mukundapur EM Bypass – Ruby Hospital – DPS Ruby Park.",
      "Wireless Moore Avenue – Chandighosh Road – Tollygunge Tram Depot – Ashok Nagar – Bansdroni – Nacktala – Rathtala – Garia More – Baishnabghata 45 No. Bus Stand – Ramgarh – GangulyBagan – Baghajatin More – SukantaSetu – Santoshpur – Garfa – Ramlal Bazar – Rathtala Mini Bus Stand – P. Majumdar Road – DPS Ruby Park.",
      "Golf Club Road – Better High School – Golf Green Central Park – Regent Estate – Vikramgarh – Golf Green Daily Market – Nabina Cinema – Prince Anwar Shah Road – Lords Bakeri Road – Jadavpur Thana – Jadavpur 8B Bus Stand – Selimpur – Jodhpur Park Post Office – DhakuriaDakhinapan – Panchanantala – GolparkMouchak – DPS Ruby Park.",
    ],
  },
  {
    title: "NORTH KOLKATA",
    routes: [
      "Malapara – Jorabagan Power House – Ganesh Talkies – Girish Park – Bagbazar Bata – Shyambazar Five Point – Raj Ballavpara – Sova Bazar – HatiBagan – Central Avenue – Ram Mandir – Indian Airline – Hind Cinema Hall – Moulali Crossing – CIT Road Philips – PaddoPukur CIT Road – Dev Lane – Chittaranjan Hospital – 4 No. Bridge – Vrindaban Garden – Science City – VIP Bazar – Tagore Park – Ruby General Hospital – NarkelBagan Bus Stop – DPS Ruby Park.",

      "Dunlop – Sinthir More – Kashipur Thana – Motijheel – Rodkul – Satgachi – Mrinalini Cinema – Nager Bazar – Central Jail – Airport Gate No. 1 – Kaikhali – Haldiram – PoddarVihar – Raghunathpur – Teghoria – Baguihati – Kestopur – Shree Bhumi – Lake Town – Kalindi More – Jessore Road EMC Factory – Barat – Bangur 227 Bus Stand – Bangur Swimming Pool – Golaghata – Ultadanga More – VSNL Building – Manicktala – Kankurgachi ESI Hospital – PhoolBagan – Beliaghata CIT Road – Rashmoni Bazar – Beliaghata Main Road – Silver Spring – DPS Ruby Park.",
    ],
  },
  {
    title: "HOWRAH",
    routes: [
      "Mandirtala – DanerSekh Lane – Bataitala – Ashoka Cinema – Howrah Jute Mill – Howrah Sandhya Bazar – Howrah MullickPhatak – Howrah Maidan – Howrah AC Market – Janta Medical – Golabari P. S. – DPS Ruby Park.",
    ],
  },
] as const;

const SchoolTransportRoutesPage: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);

  return (
    <ul className="space-y-12">
      {routes.map((route) => (
        <li key={route.title} className="space-y-4">
          <h4 className="text-xl font-semibold">{route.title}</h4>
          <ul className="list-inside list-disc space-y-4 pl-2">
            {route.routes.map((routeItem) => (
              <li key={routeItem} className="pl-2">
                {routeItem}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default SchoolTransportRoutesPage;
