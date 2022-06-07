import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';


const Posts = (props) => {
	const { posts } = props;
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end" mt={2} mb={5}>
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card>
									<CardMedia
										sx={{paddingTop: '56.25%'}}
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											sx={{fontSize: '16px',textAlign: 'left',}}
										>
											{post.title.substr(0, 50)}...
										</Typography>
										<div sx={{	display: 'flex',
                                        justifyContent: 'left',
                                        alignItems: 'baseline',
                                        fontSize: '12px',
                                        textAlign: 'left',
                                        marginBottom: 2}}>
											<Typography
												component="p"
												color="textPrimary"
											></Typography>
											<Typography variant="p" color="textSecondary">
												{post.excerpt.substr(0, 60)}...
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Posts;
