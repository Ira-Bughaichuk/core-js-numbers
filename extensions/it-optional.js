function testOptional(title, fn, isAsyncTest) {
  if (isAsyncTest) {
    it(title, function test(done) {
      try {
        fn.call(this, done);
      } catch (error) {
        if (err.message === 'Not implemented') {
          this.test.skip();
        } else {
          throw error;
        }
      }
    });
  } else {
    it(title, function test() {
      try {
        fn.call(this);
      } catch (error) {
        if (err.message === 'Not implemented') {
          this.test.skip();
        } else {
          throw error;
        }
      }
    });
  }
}

module.exports = testOptional;
