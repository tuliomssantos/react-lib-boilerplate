# React Library Boilerplate :watch:

Use to save time building React component libraries.

🔧 Available commands
```bash
$ build # Run the application blundle using the Rollup configuration file 🚀
$ commit # Helper to write conventional commits 🐶
$ release # Generates a new release with standard-version 🐗
$ storybook # Runs Storybook in development mode 📗
$ build-storybook # Build Storybook as a static web application 📕
$ test # Execute unit tests 🎯
```

## Development workflow with Yalc

Yalc provides "Better workflow than npm | yarn link for package authors".

Install globaly

```bash
$ yarn global add yalc
```

Publish
```bash
$ yalc publish
```

**Link** to your project
```bash
$ yalc link <my-package>
```

After making changes, to update your lib in other packages, run:
```bash
$ yalc push
```
