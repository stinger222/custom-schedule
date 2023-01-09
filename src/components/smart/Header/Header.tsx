import { ReactNode, useContext } from "react"
import { StoreContext } from "../../.."
import { observer } from "mobx-react"

import { StyledHeader } from "./Header.styled"
import BurgerButton from "./BurgerButton/BurgerButton"
import Dropdown from "../Dropdown/Dropdown"
import NavHome from "./NavHome/NavHome"
import NavBar from "./NavBar/NavBar"

interface IHeaderExtensions {
	BurgerButton: typeof BurgerButton,
	NavBar: typeof NavBar,
	NavHome: typeof NavHome
}
interface IProps {
	children: ReactNode
}

const Header: React.FC<IProps> & IHeaderExtensions = ({ children }) => {
	const { uiStore } = useContext(StoreContext)

	return (
		<StyledHeader>
			{children}
      {uiStore.isDropdownOpen && <Dropdown/>}
		</StyledHeader>
	)
}

Header.BurgerButton = BurgerButton
Header.NavBar = NavBar
Header.NavHome = NavHome

export default observer(Header)