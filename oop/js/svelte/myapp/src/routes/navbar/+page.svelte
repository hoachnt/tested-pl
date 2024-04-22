<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<style>
	nav {
		position: sticky;
        top: 0;
        left: 0;
		background: #000;
		color: #fff;
        min-height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
	}
    nav > a {
        color: #fff;
        text-transform: capitalize;
        margin: 0 5px;
        text-decoration: none;
        padding: 10px;
    }
    nav > a:hover {
        text-decoration: underline;
        background: #3886ec;
    }
    nav > a:focus {
        background: #0a53b3;
    }
</style>
