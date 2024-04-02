function closeLightBox() {
	document.getElementById("lightbox").style.display = "none";
	document.getElementById("header").style.display = "block";
}
window.onload = function() {
	closeLightBox();
	document.getElementById("artist1").onclick = function() {
		showLightBox1();
		document.getElementById("header").style.display = "none";
	};
	document.getElementById("artist2").onclick = function() {
		showLightBox2();
		document.getElementById("header").style.display = "none";
	};
	document.getElementById("artist3").onclick = function() {
		showLightBox3();
		document.getElementById("header").style.display = "none";
	};
	document.getElementById("artist4").onclick = function() {
		showLightBox4();
		document.getElementById("header").style.display = "none";
	};

	document.getElementById("lightbox").onclick = function() {
		closeLightBox();

	};
};

function showLightBox1() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/John2.webp";
	document.getElementById("message").innerHTML = "John Lennon is arguably the greatest songwriter of his generation. As founder and leader of The Beatles and also as a solo artist, Lennon has won seven GRAMMY® Awards, including two Lifetime Achievement Awards, Five BRIT Awards including two Special Awards for Outstanding Contribution to Music, 21 NME Awards, 15 Ivor Novellos and an Oscar (Academy Award). He has been inducted into the Rock and Roll Hall of Fame and the Songwriters Hall of Fame and has a star on the Hollywood Walk of Fame. In 2008, Rolling Stone ranked Lennon in the Top 5 of the magazine’s “100 Greatest Singers Of All Time” list.";
	document.getElementById("name").innerHTML = "『 John Lennon 』";

}

function showLightBox2() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/Paul2.jpg";
	document.getElementById("message").innerHTML = "Paul McCartney's work as a singer/songwriter with the Beatles in the 1960s helped transform popular music into a creative, highly commercial art form, with an uncanny ability to blend the two. He is also one of the most popular solo performers of all time, in terms of both sales of his recordings and attendance at his concerts."+ "<br>" +"<br>" + "McCartney’s father—a trumpet player and pianist—delighted in the sound of music weaving through the household. Lucky for him, his son Paul had a natural affinity for it, even learning the piano by ear and joining a choir. When he was 14 years old, his father had a special gift for him—a nickel-plated trumpet.";
	document.getElementById("name").innerHTML = "『 Paul McCartney 』";



}

function showLightBox3() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/George2.jpg";
	document.getElementById("message").innerHTML = "George Harrison (born February 25, 1943, Liverpool, England—died November 29, 2001, Los Angeles, California, U.S.) British musician, singer, and songwriter, who gained fame as the lead guitarist of the Beatles, one of the most important and influential bands in the history of rock music."+"<br>" + "<br>" +" George Harrison turned 27 on February 25, 1970, less than two months before Paul McCartney told the world he had no future plans to work with the Beatles. It had been 12 years since Harrison had joined John Lennon’s band, The Quarrymen—shortly after McCartney, his Liverpool schoolmate—in 1958.";
	document.getElementById("name").innerHTML = "『 George Harrison 』";


}

function showLightBox4() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/Ringo2.jpg";
	document.getElementById("message").innerHTML = "Ringo Starr, known for his easygoing personality, rose to fame in the early 1960s as a member of the legendary rock group the Beatles. Primarily a drummer, Starr also sang and occasionally wrote songs for the group, singing 'With a Little Help from My Friends' and writing 'Octopus's Garden.'"+"<br>" + "<br>" +"Starr’s love for music emerged at the age of 13, while he was staying in the hospital recovering from tuberculosis. During his extended stay, Starr joined fellow patients to form a hospital band. Starr’s first “drum” was a cotton bobbin that he used as a mallet to hit the cabinets in his hospital room.";
	document.getElementById("name").innerHTML = "『 Ringo Starr 』";

}


     
   

