import React from "react";
import "../../../style/css/content-tabel.css";

const ContentTabel = () => {
	const contents = [
		{
			detailName: "Name",
			detailContent: "Rinjani",
		},
		{
			detailName: "Location",
			detailContent: "Sembalun, Lombok, Indonesia",
		},
		{
			detailName: "Status",
			detailContent: "Active",
		},
		{
			detailName: "Total Track",
			detailContent: "4",
		},
		{
			detailName: "Total POS",
			detailContent: "3",
		},
		{
			detailName: "History",
			detailContent:
				"imanakamberada saying aku disini ayo kita ergike pantai dan bersuka cita disana hahsaying aku disini ayo kita pergi lreomke pantai dan bersuka cita disanamakansana rumahsaya dimana kamberada saying aku disini",
		},
		{
			detailName: "Myth",
			detailContent: "Dimanakamberada saying aku disini ayo kita ergike pantai dan bersuka cita disana hahsaying aku disini ayo kita pergi lreomke pantai dan bersuka cita disanamakansana",
		},
		{
			detailName: "Max Climbers",
			detailContent: "500",
		},
	];

	return (
		<div className="row content-tabel">
			<div className="col-lg-8 col-md-10 col-sm-12 col-12">
				{contents.map((content) => {
					return (
						<div className="d-flex">
							<p className="content-tabel__label">{content.detailName}</p>
							<p className="content-tabel__colon">:</p>
							<p className="content-tabel__content">{content.detailContent}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ContentTabel;
