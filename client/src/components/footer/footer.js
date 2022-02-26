import React from 'react'
import Logo from "../headers/icon/logo.png";
function footer() {
  return (
    <footer>
	<div className="row">
		<div className="centered-semiwide clear-after">
			<div className="float col t-strong hide-mobile">
				<a href="#"><img className="image-light" src={Logo} /></a>
			</div>
			<div className="float col t-ssmall hide-mobile">
				<div className="line">TAMKY</div>
				<div className="line">32600 QUANG NAM</div>
				<div className="line"><a id="footer-phone" href="tel:+330562072144">09 05 60 35 89</a><script type="text/javascript">document.getElementById("footer-phone").innerHTML = '0'+'5'+' '+'6'+'2'+' '+'0'+'7'+' '+'2'+'1'+' '+'4'+'4';</script><script type="text/javascript">document.getElementById("footer-phone").href = 'tel:'+'+'+'3'+'3'+'0'+'5'+'6'+'2'+'0'+'7'+'2'+'1'+'4'+'4';</script></div>
			</div>
			<div className="float col t-ssmall">
				<a className="line" href="#">Site map</a>
				<a className="line" href="#">Legal information</a>
				<a className="line" href="#">Cookies</a>
			</div>
			{/* <div className="float right social-sharing white">
				<div className="middle-holder">
					<div className="middle">
						<a className="facebook" rel="noopener, noreferrer" target="_blank" href="#"></a><a rel="noopener, noreferrer" target="_blank" className="linkedin" href="#"></a><a rel="noopener, noreferrer" target="_blank" className="youtube" href="#"></a>
					</div>
				</div>
			</div> */}
			<div className="scrolltop-container no-select"><div className="scrolltop a-small t-pcolor-1">Back to the top</div></div>
		</div>
	</div>
	<div className="row spktr">
		<div className="centered-semiwide clear-after">
			<div className="center-holder">
				<div className="t-ssmall">
					<span className="copyright">© 2022 - Website made by <a target="_blank" href="https://www.facebook.com/profile.php?id=100008462046130">MINHDEV</a></span>
				</div>
			</div>
		</div>
	</div>
	</footer>
  )
}

export default footer