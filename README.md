# my-k6

> Bundle k6 with extensions without hassle.
>
> **my-k6** uses [xk6bundler](https://github.com/marketplace/actions/xk6bundler) GitHub Action to make bundle [k6](https://k6.io) with extensions possible without go toolchain or even without command line commands. It is a GitHub [template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) so you can easily create your own custom k6 bundler repository.
> 
> 1. [Create repository from this template](https://github.com/szkiba/my-k6/generate)
> 2. Edit `README.md` file and change extension list (and remove this intro block)
> 3. [Create new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) on GitHub (use new tag, for example `v1.0.0`). 
>    Alternatively you can start release by creating annotated release tag from command line:
>    ```bash
>      git tag -a v1.0.0 -m "initial release"
>      git push --tags
>    ```
>
> That's all folks. GitHub workflow will do the rests. Platform dependent binary artifacts will be uploaded to release. The Docker image will be uploaded to [GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages) Docker registry.
>
> **advanced**
>
> - For reproducible releases you should pin extension versions by adding `@version` (ie: `@v0.1.0`) to the end of extension lines.
> 
> - Edit `.github/workflows/xk6bundler.yml` file for more advanced configuration (change target platforms, add publishing to Docker Hub, etc).
>

Custom k6 build bundled with the following extensions:

```xk6
github.com/szkiba/xk6-dashboard
github.com/szkiba/xk6-dotenv
github.com/szkiba/xk6-faker
```

> Keep the `xk6` code block language when you modify the above configuration.

---

This is not an official [k6](https://k6.io) build.
