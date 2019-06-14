# Writing and Building Documentation

Qiskit documentation is shaped by the [docs as code](https://www.writethedocs.org/guide/docs-as-code/) philosophy and follows the
[IBM style guidelines](https://www.ibm.com/developerworks/library/styleguidelines/).

The [published documentation](https://qiskit.org/documentation/index.html) is
built from the master branch of [Qiskit/qiskit/docs](https://github.com/Qiskit/qiskit/tree/master/docs) using [Sphinx](http://www.sphinx-doc.org/en/master/).

You can build a local copy of the documentation from your local clone of the
`Qiskit/qiskit` repository as follows:

1. Clone `Qiskit/qiskit` (or your personal fork).

2. [Install Sphinx](http://www.sphinx-doc.org/en/master/usage/installation.html).

3. Install the `Material Design HTML Theme for Sphinx` by running the following
   in a terminal window:

   ```pip install sphinx_materialdesign_theme```

4. Build the documentation by navigating to your local clone of `Qiskit/qiskit`
   and running the following command in a terminal window:

   ```make doc```

As you make changes to your local RST files, you can update your
HTML files by navigating to `/doc/` and running the following in a terminal
window:

```make html```

This will build a styled, HTML version of your local documentation repository
in the subdirectory `/docs/_build/html/`.
