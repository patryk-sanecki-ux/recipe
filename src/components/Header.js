import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const HeaderContainer = styled(AppBar)`
	background-color: #008000;
	margin-bottom: 20px;
`;

const Header = () => (
	<HeaderContainer position='static'>
		<Toolbar>
			<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
				Recipe finder
			</Typography>
			<Typography variant='subtitle1' component='div'>
				search your own recipe
			</Typography>
		</Toolbar>
	</HeaderContainer>
);

export default Header;
