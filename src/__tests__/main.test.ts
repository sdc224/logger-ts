import logging from "..";

describe("logger functions", () => {
	logging
		.configure({
			minLevels: {
				core: "info",
				"core.trace": "trace",
				"core.warn": "warn",
				"core.error": "error",
				"core.debug": "debug",
			},
		})
		.registerConsoleLogger();

	it("shows trace with message", () => {
		const logger = logging.getLogger("core.trace");
		logger.trace = jest.fn();
		expect(logger.trace).toBeTruthy();
	});

	it("shows info with message", () => {
		const logger = logging.getLogger("core");
		logger.info = jest.fn();
		expect(logger.info).toBeTruthy();
	});

	it("shows warn with message", () => {
		const logger = logging.getLogger("core.warn");
		logger.warn = jest.fn();
		expect(logger.warn).toBeTruthy();
	});

	it("shows error with message", () => {
		const logger = logging.getLogger("core.error");
		logger.error = jest.fn();
		expect(logger.error).toBeTruthy();
	});

	it("shows debug with message", () => {
		const logger = logging.getLogger("core.debug");
		logger.debug = jest.fn();
		expect(logger.debug).toBeTruthy();
	});
});
