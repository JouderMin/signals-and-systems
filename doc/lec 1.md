# Lec 1: Introduction

## The defination of Signal and System

Signals are functions of one or more independent variables that carry some type of information.

Systems would be used to process signals.

## Continuous-Time Signal and Discrete-Time Signal

A typically continuous-time signal is audio signal. Audio signal is a function of time and the independent variable being time is continuous. Besides, the audio signal has only one independent variable, so that will be referred to as a **one dimensional signal**. We can mark that as $x(t)$.

Of course, **signals can be multidimensional** and they may not have as there independent variables. One common example is represented by the **images**. Images as signals, we can think of as representing brightness as it varies in a horizontal and vertical direction, marked as $\text{brightness}(\text{horiz}, \text{vert})$. So image signal are a function of two variables, we can call it a **two dimensional signal**.

> [!important]
>
> For convenience, we'll have a tendency to refer to the independent variables when we talk about signals as time variables, **whether or not they really do represent time**.

We also have discrete time signals. Discrete time signal is a function of an integer variable, it only takes the integer of the argument, marked it as $x[n]$.

Discrete time signals also can be mutidimensional. We can mark a two dimensional discrete time signal as $x[n, m]$.

> [!tip]
>
> The importance of discrete time signals in an associated processing continuous to grow because of the new technologies that permit the processing of continuous time signals by first converting them to discrete time signals and processing them with discrete time systems.

## Systems

Systems would be used to process signals, so they have inputs and outputs. Depends on the input signal, the systems can be **continuous time systems** or **discrete time systems**.

<img src="./img/system.svg" alt="system" style="zoom:200%;" />

In general terms, systems are hard to deal with because they are defined very broadly and generally. But we can divide systems into:

- **Linear System**
- **Nonlinear System**

We can also divide system into:

- **Time-invariant System**
- **Time-varying System**

The course will mainly talk about **linear time-invariant system**.

## Interconnection of Systems

Systems are interconnectioned together for a variety of reasons. Interconnections of systems can be classified as:

- **Series** Interconnection
- **Parallel** Interconnection
- **Feedback** Interconnection

## Domains for Analysis and Representation

- Time Domain
  - $x(t)$
  - $x[n]$
- Frequency Domain
  - Fourier Transform
  - Laplace Transform
  - Z Transform

For example, when a note being played, the time domain represention would be how the sound pressure as a function of time would change, and the frequency domain represention would be a represention of the frequency content of the note.
