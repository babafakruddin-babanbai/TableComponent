import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const Toogle = () => {
const [anchorEl, setAnchorEl] = React.useState(null);

const MyOptions = [
	"Share via Whatsapp",
	"Send Email",
	"Download",
	"Save as PDF",
];

const handleClick = (event) => {
	setAnchorEl(event.currentTarget);
};

const open = Boolean(anchorEl);

const handleClose = () => {
	setAnchorEl(null);
};

return (
	<div
	style={{
		marginLeft: "40%",
	}}
	>
	<h2>How to Create More Options in ReactJS?</h2>
	<span>More Options => </span>
	<IconButton
		aria-label="more"
		onClick={handleClick}
		aria-haspopup="true"
		aria-controls="long-menu"
	>
		<MoreVertIcon />
	</IconButton>
	<Menu
		anchorEl={anchorEl}
		keepMounted onClose={handleClose}
		open={open}>
		{MyOptions.map((option) => (
		<MenuItem
			key={option}
			onClick={handleClose}>
			{option}
		</MenuItem>
		))}
	</Menu>
	</div>
);
};

export default Toogle;
