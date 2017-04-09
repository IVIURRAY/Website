<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">

	<div class="neighborhood-guides">
		<div class="container">
			<h2>Here are some quick facts about me...</h2>
				<div class="row">
						<xsl:for-each select="/facts/fact">
							<div class="col-sm-4">
								<div class="thumbnail">
									<img>
										<xsl:attribute name="src">
											<xsl:value-of select="image"/>
										</xsl:attribute>
									</img>
									<div class="caption">
										<xsl:value-of select="description"/>
									</div>
								</div>
							</div>	
						</xsl:for-each>
				</div>
		</div>
	</div>

</xsl:template>
</xsl:stylesheet>