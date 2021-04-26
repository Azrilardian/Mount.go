import React from "react";
import JumbotronDetail from "../../components/DetailPages/JumbotronDetail/JumbotronDetail";
import Description from "../../components/DetailPages/Description/Description";
import Detail from "../../components/DetailPages/Detail/Detail";
import Picture from "../../components/DetailPages/Picture/Picture";
import Review from "../../components/DetailPages/Review/Review";
import Footer from "../../components/Utility/Footer/Footer";

const DetailPages = () => {
	return (
		<>
			<JumbotronDetail></JumbotronDetail>
			<Description></Description>
			<Detail></Detail>
			<Picture></Picture>
			<Review></Review>
			<Footer></Footer>
		</>
	);
};

export default DetailPages;
