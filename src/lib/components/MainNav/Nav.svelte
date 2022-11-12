
<nav>
    <ul>
        <li><a class="menu-roll" href="/" data-sveltekit-prefetch>Home</a></li>
        <li><a class="menu-roll" href="/contact" data-sveltekit-prefetch>Contact</a></li>
        <li><a href="/#">
            <svg id="behance-profile" role="img" aria-label="[title]" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Behance Profile</title>
                <path d="M22.4999 6.5H15.4999V4.5H22.4999V6.5ZM24.2259 16.5C23.7839 17.797 22.1969 19.5 19.1249 19.5C16.0509 19.5 13.5609 17.771 13.5609 13.825C13.5609 9.915 15.8859 7.905 19.0269 7.905C22.1089 7.905 23.9909 9.687 24.4019 12.331C24.4799 12.837 24.5109 13.519 24.4969 14.471H16.4699C16.5999 17.682 19.9529 17.783 21.0579 16.5H24.2259ZM16.5399 12.5H21.5049C21.3999 10.953 20.3689 10.281 19.0279 10.281C17.5619 10.281 16.7509 11.049 16.5399 12.5ZM6.96588 19.488H0.499878V4.521H7.45288C12.9289 4.602 13.0329 9.965 10.1729 11.427C13.6339 12.687 13.7499 19.488 6.96588 19.488ZM3.49988 10.5H7.08388C9.59188 10.5 9.98988 7.5 6.77188 7.5H3.49988V10.5ZM6.89088 13.5H3.49988V16.516H6.84088C9.89588 16.516 9.70888 13.5 6.89088 13.5Z" fill="currentColor"/>
            </svg>
            </a>
        </li>
        <li><a href="/#">
            <svg id="linkedin-profile" role="img" aria-label="[title]" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Linkedin Profile</title>
                <path d="M7.31142 3.84783C7.31142 4.86857 6.49099 5.69565 5.47838 5.69565C4.46577 5.69565 3.64534 4.86857 3.64534 3.84783C3.64534 2.82783 4.46577 2 5.47838 2C6.49099 2 7.31142 2.82783 7.31142 3.84783ZM7.32621 7.17391H3.63055V19H7.32621V7.17391ZM13.2259 7.17391H9.55395V19H13.2267V12.792C13.2267 9.3403 17.6829 9.05796 17.6829 12.792V19H21.3697V11.5119C21.3697 5.68752 14.7752 5.89965 13.2259 8.76674V7.17391Z" fill="currentColor"/>
            </svg>
        </a></li>
    </ul>
</nav>


<style lang="scss">
    nav {

        ul {
            display: flex;
            gap: 1.25rem;
            align-items: center;
            position: relative;
            padding-inline-start: 0;

            &:hover {
                li {
                    a {
                        transform:scale(1.25);
                        opacity:0.2;
                        filter:blur(2px);
                    }
                }
            }

            li {
                list-style:none;
                transition:0.5s;
                

                a {
                    color: #2A2D38;
                    display: flex;
                    align-items: center;
                    position:relative;
                    transition: all 0.3s ease-in-out;
                    overflow: hidden;

                    &::before {
                        content:'';
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        background:#2A2D38;
                        transition:0.5s;
                        transform-origin:right;
                        transform:scaleX(0);
                        z-index:-1;
                    }

                    &:hover {
                        transform:scale(2);
                        opacity:1;
                        filter:blur(0);
                        text-decoration:none;
                        color:#fff;
                        padding: 0 0.5rem;

                        &::before {
                            transition:transform 0.5s;
                            transform-origin:left;
                            transform:scaleX(1);
                        }
                    }

  
                }
            }


        }

    }

</style>
