//PostList / Introduction for the first panel with created Javascript that paths and leads its way back to the original site. Imports are taken using Node.js amd the React app.
//This code was used and then modifed by myself with the help of "CodingEntrepreneurs"
import React, { Component } from 'react'
import PostData from '../data/posts.json'
import '../App.css';

//Extending of PostList to then pass onto the main app.
class PostList extends Component {
	render () {
		return (
			<div class = "a">
			{PostData.map((postDetail, index)=>{
				return <div>
				<p>{postDetail.maintitle}</p>
				<p>{postDetail.info}</p>
				</div>
			})}
			</div>
		)
	}
}

export default PostList