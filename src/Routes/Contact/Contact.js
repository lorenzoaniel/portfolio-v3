import React from "react";
import styled from "styled-components";
import ContactFormInputDynamic from "../../Components/Outlet/Contact/ContactFormInputDynamic/ContactFormInputDynamic";
import ContactFormLabelDynamic from "../../Components/Outlet/Contact/ContactFormLabelDynamic/ContactFormLabelDynamic";
import ContactFormSubmitButton from "../../Components/Outlet/Contact/ContactFormSubmitButton/ContactFormSubmitButton";
import ContactFormInputTextAreaDynamic from "../../Components/Outlet/Contact/ContactFormInputTextAreaDynamic/ContactFormInputTextAreaDynamic";
import ContactFormMain from "../../Components/Outlet/Contact/ContactFormMain/ContactFormMain";
import { routePageBaseStyle } from "../../Styles/RoutePageBaseStyle/routePageBaseStyle";

const ContactContainer = styled.div`
	${routePageBaseStyle}
`;

export default function Contact(props) {
	const { classNameProp } = props;

	return (
		<ContactContainer className={classNameProp}>
			<ContactFormMain>
				<ContactFormInputDynamic
					inputtypeprops={"text"}
					placeholderprops={"Firstname"}
					gridareaprops={"firstname"}
					idprops={"contact-firstname"}
				>
					<ContactFormLabelDynamic titleprops={"First Name: "} />
				</ContactFormInputDynamic>
				<ContactFormInputDynamic
					inputtypeprops={"text"}
					placeholderprops={"Email"}
					gridareaprops={"email"}
					idprops={"contact-email"}
				>
					<ContactFormLabelDynamic titleprops={"Email: "} />
				</ContactFormInputDynamic>
				<ContactFormInputTextAreaDynamic
					inputtypeprops={"textarea"}
					placeholderprops={"Comments"}
					gridareaprops={"comments"}
					idprops={"contact-comments"}
				>
					<ContactFormLabelDynamic titleprops={"Comments: "} />
				</ContactFormInputTextAreaDynamic>
				<ContactFormSubmitButton gridareaprops={"submit"} />
			</ContactFormMain>
		</ContactContainer>
	);
}
